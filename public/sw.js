// sw.js

self.addEventListener('install',()=>{
    console.log('ServiceWorker launched.')
})

self.addEventListener('activate',()=>{
    console.log('ServiceWorker starting...')
})

self.addEventListener('fetch',()=>{
    console.log('Data fetching...')
})
