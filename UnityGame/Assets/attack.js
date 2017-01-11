#pragma strict
var player : GameObject;
var run : boolean;
public var speed : float;
var obj : GameObject;
run = false;
var instantiatedProjectile : Rigidbody;
private var waitTime : float;
public var weapons : GameObject[];
public var bullets : GameObject[];
public var weapon : boolean[];
public var weaponImages : UI.Text[];
public var weaponDamages : int[];
public var weaponReloadTime : int[];
private var upOD : int;
private var shift : Vector3;
public var camera1 : GameObject;

 
function Start() {
    MeleeSwing();
    weaponImages[0].color = Color.black;
    weaponImages[1].color = Color.white;
    weaponImages[2].color = Color.black;
    //weaponImages[3].color = Color.black;
}

function Update(){

}
 
function MeleeSwing(){
    while(true){
        waitTime = 0;
        if(Input.GetButtonDown("Fire1")){
            if(weapon[0] == true){
                if(obj != null){
                    //player.GetComponent.<Animation>().CrossFade("1h_attack1");
                    obj.SendMessage ("ApplyDamage", weaponDamages[0]);
                    //yield WaitForSeconds(player.GetComponent.<Animation>()["1h_attack1"].length);
                    waitTime = weaponReloadTime[0];
                }
                else{
                    yield;
                }
            }
            else if(weapon[1] == true){
                upOD = Random.Range(0, 1);
                if(upOD == 1){
                    bullets[0].active = true;
                    shift = Vector3(0, 0, 0.5) + Vector3(0, Random.Range(0.0f, 0.5f), Random.Range(0.0f, 0.5f));
                    instantiatedProjectile = Instantiate(bullets[0], camera1.transform.position, camera1.transform.rotation)as Rigidbody;
                    bullets[0].active = false;
                    waitTime =  weaponReloadTime[1];
                }
                else if(upOD == 0){
                    bullets[0].active = true;
                    shift = Vector3(0, 0, 0.5) - Vector3(0, Random.Range(0.0f, 0.5f), Random.Range(0.0f, 0.5f));
                    instantiatedProjectile = Instantiate(bullets[0], camera1.transform.position, camera1.transform.rotation)as Rigidbody;
                    bullets[0].active = false;
                    waitTime =  weaponReloadTime[1];
                }
                //print(shift);
            }
            else if(weapon[2] == true){
                
                bullets[1].active = true;
                instantiatedProjectile = Instantiate(bullets[1], camera1.transform.position, camera1.transform.rotation)as Rigidbody;
                    //print(shift);
                bullets[1].active = false;
                waitTime =  weaponReloadTime[2];
            }
        }
        if(Input.GetKeyDown(KeyCode.Alpha3)){
            weapon[0]=true;
            weapon[1]=false;
            weapon[2]=false;
            weapon[3]=false;
            weaponImages[0].color = Color.white;
            weaponImages[1].color = Color.black;
            weaponImages[2].color = Color.black;
            //weaponImages[3].color = Color.black;
        }
        if(Input.GetKeyDown(KeyCode.Alpha2)){
            weapon[0]=false;
            weapon[1]=true;
            weapon[2]=false;
            weapon[3]=false;
            weaponImages[0].color = Color.black;
            weaponImages[1].color = Color.white;
            weaponImages[2].color = Color.black;
            //weaponImages[3].color = Color.black;
        }
        if(Input.GetKeyDown(KeyCode.Alpha1)){
            weapon[0]=false;
            weapon[1]=false;
            weapon[2]=true;
            weapon[3]=false;
            weaponImages[0].color = Color.black;
            weaponImages[1].color = Color.black;
            weaponImages[2].color = Color.white;
            //weaponImages[3].color = Color.black;
        }

    yield WaitForSecondsRealtime (waitTime);
    }
}

function OnTriggerEnter (other : Collider) {
    if(other.GetComponent.<enemyDamage>()){
       obj = other.gameObject;
    }
}

function OnTriggerStay(other : Collider){
    if(obj==null){
        if(other.GetComponent.<enemyDamage>()){
            obj = other.gameObject;
        }
    }
}

function OnTriggerExit(other : Collider) {
    obj = null;
}
