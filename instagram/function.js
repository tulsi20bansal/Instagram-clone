//alert function
const setALet=(msg,type="danger")=>
{
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"><?button></p>`;
}

// get all localstorage data 

/**
 * get all LS data 
 * @param {*} key 
 */

const getLSData=(key)=>
{
    if(localStorage.getItem(key))
    {
        return JSON.parse(localStorage.getItem(key));
    }
    else{
        return false;
    }
}

// set value localStorage 
const createLSData=(key,value)=>
{
    //init value
    let data=[];

    // check key exist or not 
    if(localStorage.getItem(key)){
        data=JSON.parse(localStorage.getItem(key))
    }
    //data push
    data.push(value);
    localStorage.setItem(key,JSON.stringify(data));
}

// update localStorage data 
const updateLSData=(key,array)=>
{
    localStorage.setItem(key,JSON.stringify(array));
}

