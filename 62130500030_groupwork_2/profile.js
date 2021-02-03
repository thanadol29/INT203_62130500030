    const app = {
        data() {
            return {
                Name: 'Thanadol',
                Surname: 'Chuesai',
                Stu: 'Uni student',
                number: '62130500030',
                depart: 'It',
                major: 'It',
                url:'images/pfp.jpg'
                //https://litter.catbox.moe/8tdzxw.jpg
            }
        },
        created(){
            console.log('test '+ this.msg)
        },
        updated(){
            console.log('Message is changed  to '+ this.msg)
        }

    }

  
    var mountedApp = Vue.createApp(app).mount('#app')