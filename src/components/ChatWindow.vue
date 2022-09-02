<template>
  <div class="chat-window">
      <div v-if="error">{{error}}</div>
      <div v-if="documents" class="bar" ref="bar">
            <div v-for="doc in fromatredDocuments" :key="doc.id" class="row">
                 <span class="created-at">{{doc.createdAt}}</span>
                 <span class="email">{{doc.email}}</span>
                 <p class="message">{{doc.message}}</p>
            </div>
      </div>

  </div>
</template>

<script>
import {ref} from 'vue'
import getCollection from '../composables/getCollection'     
import {formatDistanceToNow} from 'date-fns'
import { computed,onUpdated } from '@vue/runtime-core'
export default {
     setup()
     {
         const {error,documents}=getCollection('message')

         const fromatredDocuments=computed(()=>{
            if(documents.value)
            {
                  return documents.value.map(doc=>{
                        let time=formatDistanceToNow(doc.createdAt.toDate())
                        return {...doc,createdAt:time}
                  })
            }
         })
 
         // scrolling bottom of message
         const bar=ref(null)
         onUpdated(()=>{
                bar.value.scrollTop=bar.value.scrollHeight
         })
         return {
            error,documents,fromatredDocuments,bar
         }
     }
}
</script>

<style scoped>
.chat-window {
      background: #fafafa;
      padding: 30px 20px;
}
.row {
      margin:18px 0;
}
.created-at {
      display:block;
      color:#999;
      font-size:12px;
      margin-bottom:4px;
}
.bar .email {
      font-weight: bold;
      margin-right: 6px;
}

.bar {
      max-height: 400px;
      overflow: auto;
}

</style>