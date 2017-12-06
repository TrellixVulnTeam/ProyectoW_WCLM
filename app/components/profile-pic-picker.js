import Ember from 'ember';

export default Ember.Component.extend({
    firebaseUtil: Ember.inject.service(),
    session: Ember.inject.service(),
    
    actions:{
        previewImage(event){
            let input = event.target;
            let file = input.files[0];

            //MANDAR AL PREVIEW
            let reader = new FileReader();
            reader.onload = (e)=>{
                this.$('#preview').attr('src',e.target.result);
                debugger;
                this.get('firebaseUtil').uploadFile(`images/${this.get('session.uid')}`,file).then((downloadURL)=>{
                    alert(downloadURL);
                    this.sendAction('didChange',downloadURL)
                });
            }
            reader.readAsDataURL(file);
        }
    }
    
});
