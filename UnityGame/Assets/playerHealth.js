#pragma strict
public var maxHealth : float;
public var damageReduction : float;
public var missChance : float;
public var absorbtionChance : float;
public var stunTime : float;
public var text : UI.Text;
private var health : float = maxHealth;
private var miss : boolean;
private var miss1 : float;
private var absorb : boolean;
private var absorb1 : float;
private var damage : float;

function Start () {

}

function Update () {

}

function ApplyDamage(damageRate){
    miss1 = Random.Range(0,101);
    if(miss1<=missChance){
        miss=true;
    }
    else{
        miss=false;
    }
    if(miss==false){
        absorb1 = Random.Range(0,101);
        if(absorb1<=absorbtionChance){
            absorb = true;
            damage = 0;
        }
        damage = damageRate;
        damage = damage - (damage * damageReduction);
        health = health - damage;
        print((health/maxHealth).ToString());
        text.text = (health/maxHealth).ToString();
        if(health<=0){
            //death
            Destroy(gameObject);
        }
    }
}