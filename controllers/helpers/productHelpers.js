
// function validateProduct(req, res, next){
//     let isValid = true;
    
//     if(req.body.name.length <= 2){
//       isValid = false;
//     }
  
//     if(req.body.description.length < 5){
//       isValid = false;
//     }
  
//     if(!req.body.imageUrl){
//       isValid = false;
//     }
  
//     if(isValid){
//       next();
//     }
  
//   }

  exports.validateProduct = (req, res, next) => {
    let isValid = true;
    
    if(req.body.name.length <= 2){
      isValid = false;
    }
  
    if(req.body.description.length < 5){
      isValid = false;
    }
  
    if(!req.body.imageUrl){
      isValid = false;
    }
  
    if(isValid){
      next();
    }
  
  }

//   module.exports = {
//       validateProduct,
//   }