const voixAssistant = {

    messageVocal(text){

            document.querySelector('.assistant-cible').innerHTML = "";

            let texteRenderHtmlElement = document.querySelector('.assistant-cible');

            let textAssistantHtmlElement = document.createElement('p');
            textAssistantHtmlElement.classList.add('text-space-rendering');

            textAssistantHtmlElement.textContent = text
            texteRenderHtmlElement.appendChild(textAssistantHtmlElement);
            
            if(textAssistantHtmlElement.textContent){
                let text = texteRenderHtmlElement.textContent;
                let speech = new SpeechSynthesisUtterance(text);
                speechSynthesis.speak(speech);    
                
            }              
    },

    voice : null,
    // je créer une fonction qui récupère les voie disponible sur l'ordinateur
    onChageVoice(){

        speechSynthesis.onvoiceschanged = function(){
        
            voice = speechSynthesis.getVoices();
            console.log(voice);
        }; 
    },
    
    ifFirstLoad() { 
        // Check if localStorage is available (IE8+) and make sure that the visited flag is not already set.
        if(typeof window.localStorage !== "undefined" && !localStorage.getItem('visited')) {
             // Set visited flag in local storage
             localStorage.setItem('visited', true);
             // Alert the user
          
                 let texteRenderHtmlElement = document.querySelector('.assistant-cible');

                 let textAssistantHtmlElement = document.createElement('p');
                 textAssistantHtmlElement.classList.add('text-space-rendering');

                 textAssistantHtmlElement.textContent = ` Bonjour je suis anya, votre assistante personnel. Je peut recherchez pour vous toute sorte d'information, selon vos gout et vos envie. Pour en savoir plus je vous invite a cliquer sur le bouton assistant en haut a droite, sinon que puis je faire pour vous ?`;
                 texteRenderHtmlElement.appendChild(textAssistantHtmlElement);

                 if(textAssistantHtmlElement.textContent){
                     
                     let text = texteRenderHtmlElement.textContent;
                     let speech = new SpeechSynthesisUtterance(text);
                   //   speech.voice = voice[1];
                     speechSynthesis.speak(speech);    
                 }              
              
        }else{
            
            voixAssistant.messageVocal("Bonjour que puis-je faire pour vous?");             
            
        }
    },
};

window.addEventListener('load', voixAssistant.ifFirstLoad());