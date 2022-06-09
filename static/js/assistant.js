     
// ==================================================================================================================================================================================================
//===========================================================================INITIALIZATION DE LA SCENE =============================================================================================






        var canvas = document.getElementById("renderCanvas");
    
        var startRenderLoop = function (engine, canvas) {
            engine.runRenderLoop(function () {
                if (sceneToRender && sceneToRender.activeCamera) {
                    sceneToRender.render();
                }
            });
        };

        var engine = null;
        var scene = null;
        var sceneToRender = null;
        var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
// ======================================================================================================================================================================================================
//====================================================================== CREATION DE LA SCENE =========================================================================================================== 

        const delayCreateScene = function () {

            const scene = new BABYLON.Scene(engine);


            // permet d'importer mon personnage 3d, définir l'environement et le placement du personnage
            // il prend une callback qui a pour parametre mon personnage
            BABYLON.SceneLoader.ImportMesh( "", "static/models/", "anya.glb", scene, function (meshes, particleSystems, skeletons, animationGroups) {

            scene.createDefaultCameraOrLight(true, true, false);
            // Problématique => le personnage tourne le dos a la caméra, pour régler le problème :
            var helperCamera = scene.cameras[scene.cameras.length - 1]; // -> selection de la camera
            helperCamera.alpha = 1.5; // -> rotation de la camera pour la mettre devant le personnage
            scene.clearColor = new BABYLON.Color3(1, 1, 1);
// ==================================================================================================================================================================================================
// =========================================================================== ANIMATIONS ============================================================================================================

            // tableau des animations
            const animation = animationGroups;
            console.log(animation);

            // commencer l'animation
           

            // // stopper l'animation
            // animation[21].stop();
            
            
            
            const buttonSubmitHtmlElement = document.querySelector('.submit');
            
            buttonSubmitHtmlElement.addEventListener('click', function(event){
                
                event.preventDefault();
                const textSaisie = document.querySelector('.saisie-text').value;
                
                const textUser = document.createElement('p');
                textUser.classList.add('texte-submit');
                textUser.setAttribute('type', 'reset');
                textUser.textContent = textSaisie;
            
                if(textSaisie){

                    const textRenderHtmlElement = document.querySelector('.usercible');
                    textRenderHtmlElement.appendChild(textUser)

                    let motCle = [
                        "chante", 
                        "salsa" ,
                        "coucou",
                        "cour",
                    ];

                    for (let mot of motCle) {
                        
                        switch (mot === textSaisie) {
                                
                            case mot === "chante":

                             
                                voixAssistant.messageVocal("Je n'aime pas chanter mais alons-y, et un deux trois lalalalala");
                                
                                animation[17].start();
        
                                document.getElementById('reset').value = ""; 
        
                                break;
        
                            case mot === "salsa":

                                
                                voixAssistant.messageVocal("Dancer sa j'aime ! ariba");
        
                                animation[11].start();
        
                                document.getElementById('reset').value = ""; 
        
                                break;

                            case mot === "coucou":

                               
                                voixAssistant.messageVocal("coucou, je suis la !");

                                animation[21].start();
            
                                document.getElementById('reset').value = ""; 
            
                                break;
                                
                            case mot === "cour":

                                voixAssistant.messageVocal("C'est bon de courir un peut");
                                
                                animation[6].start();
                                
                                document.getElementById('reset').value = ""; 
                                
                                
                                break;
                        
                            default:
                                // console.log('je ne rentre pas dans ta condition');
                                document.getElementById('reset').value = ""; 
                                break;
                        }   
                    }   
                }     
            })
                    let textDelete = document.querySelector('.reset');
                    textDelete.addEventListener('click', function(){
                    document.querySelector('.usercible').innerHTML = "";
            });
           

// ==================================================================================================================================================================================================
// ================================================ JE CIBLE LES DIFFERENTES PARTIES DU BODY DU PERSONNAGE POUR APPLIQUER UNE TEXTURE  ==============================================================

            // Array de mon personnage
            const anya = meshes;
            console.log(anya);
            
            const hearDog = anya[6]; // -> Body 6
            const hair = anya[17]; // -> hair

            const faceSkin = anya[12]; // -> face 4
            const surcil = anya[14]; // -> face 6
            const cill = anya[16]; // -> face 8
            const eyesColor = anya[10]; // -> Face 2
            const brillanceDesYeux = anya[2]; // -> face 3
            const blancDesYeux = anya[13]; // -> Face 5
            const partOfCill = anya[15]; // -> face 7
            const contourLunette = anya[4]; // -> Body 4
            const vitreLunette = anya[5]; // -> Body 5
            const lips = anya[9]; // -> Face

            const bodyParts = anya[1]; // -> Body
            const short = anya[2]; // -> Body 2
            const chaussure = anya[7]; // -> body 7
            const debardeur = anya[8]; // -> body 8
// =============================================================================================================================================================================================
// ============================================== JE CREER LES MATERIAUX ET JE LEUR APPLIQUE UNE METHODE DE DIFFUSION ==========================================================================

            const hearDogMaterial = new BABYLON.StandardMaterial("hearDogMaterial", scene);
            hearDogMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/hearDog.png", scene); // -> Modifier la diffusion de la texture
            
            const hairMaterial = new BABYLON.StandardMaterial("hairMaterial", scene);
            hairMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/hair.png", scene);

            const faceSkinMaterial = new BABYLON.StandardMaterial("faceSkinMaterial", scene);
            faceSkinMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/faceSkin.png", scene); // -> S'applique mal

            const surcilMaterial = new BABYLON.StandardMaterial("surcilMaterial", scene);
            surcilMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/surcil.png", scene); // -> Modifier la diffusion de la texture

            const cillMaterial = new BABYLON.StandardMaterial("cillMaterial", scene);
            cillMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/cill.png", scene); // -> s'applique mal

            const eyesColorMaterial = new BABYLON.StandardMaterial("eyesColorMaterial", scene);
            eyesColorMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/eyesColor.png", scene); // -> s'applique mal

            const blancDesYeuxMaterial = new BABYLON.StandardMaterial("blancDesYeuxMaterial", scene);
            blancDesYeuxMaterial.emissiveTexture = new BABYLON.Texture("static/image/Anya/blancDesYeux.png", scene);
            
            const partOfCillMaterial = new BABYLON.StandardMaterial("partOfCillMaterial", scene);
            partOfCillMaterial.emissiveTexture = new BABYLON.Texture("static/image/Anya/partOfCill.png", scene);

            const vitreLunetteMaterial = new BABYLON.StandardMaterial("vitreLunetteMaterial", scene);
            vitreLunetteMaterial.emissiveTexture = new BABYLON.Texture("static/image/Anya/vitreLunette.png", scene); 
            vitreLunetteMaterial.alpha = 0.4;

            const contourLunetteMaterial = new BABYLON.StandardMaterial("contourLunetteMaterial", scene);
            contourLunetteMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/contourLunette.png", scene);
            contourLunetteMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);

            const lipsMaterial = new BABYLON.StandardMaterial("lipsMaterial", scene);
            lipsMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/lips.png", scene);

            const bodyPartsMaterial = new BABYLON.StandardMaterial("bodyPartsMaterial", scene);
            bodyPartsMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/bodyPartsSkin.png", scene);

            const shortMaterial = new BABYLON.StandardMaterial("shortMaterial", scene);
            shortMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/short.png", scene); // -> Mauvais rendu

            const chaussureMaterial = new BABYLON.StandardMaterial("chaussureMaterial", scene);
            chaussureMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/chaussure.png", scene); // -> Mauvais rendu

            const debardeurMaterial = new BABYLON.StandardMaterial("debardeurMaterial", scene);
            debardeurMaterial.diffuseTexture = new BABYLON.Texture("static/image/Anya/debardeur.png", scene);

            
//=============================================================================================================================================================================================
// ============================================== J'APPLIQUE LES TEXTURES AUX DIFFERRENTES PARTIE CONCERNER ====================================================================================
            
            hearDog.material = hearDogMaterial;	
            hair.material = hairMaterial;
            faceSkin.material = faceSkinMaterial;
            surcil.material = surcilMaterial;
            cill.material = cillMaterial;
            eyesColor.material = eyesColorMaterial;
            blancDesYeux.material = blancDesYeuxMaterial;
            partOfCill.material = partOfCillMaterial;
            contourLunette.material = contourLunetteMaterial;
            vitreLunette.material = vitreLunetteMaterial;
            lips.material = lipsMaterial;
            bodyParts.material = bodyPartsMaterial;
            short.material = shortMaterial;
            chaussure.material = chaussureMaterial;
            debardeur.material = debardeurMaterial;

        }
        ); 

        return scene;
        }
// ===========================================================================================================================================================================================================
// ============================================================================  CONFIGURATION DE LA SCENE  ==================================================================================================

        window.initFunction = async function() {
            
            var asyncEngineCreation = async function() {
                try {
                return createDefaultEngine();
                } catch(e) {
                console.log("the available createEngine function failed. Creating the default engine instead");
                return createDefaultEngine();
                }
            }

            window.engine = await asyncEngineCreation();
if (!engine) throw 'engine should not be null.';
startRenderLoop(engine, canvas);
window.scene = delayCreateScene();};
initFunction().then(() => {sceneToRender = scene                    
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});

