export const CartManager = {

    saveCart(item){

        let cartItems = this.getCart();

        if(!cartItems){
            localStorage.setItem("cartItems", JSON.stringify([item]));
            
    
        }else{
            const checkItem = cartItems.find(c => (c.itemId === item.itemId) && (c.itemPrice === item.itemPrice) && (c.selectedDimension.DimensionId === item.selectedDimension.DimensionId));

            if(checkItem){

                const updatedCartItems = cartItems.map(c => {
                    if((c.itemId === item.itemId) && (c.itemPrice === item.itemPrice) && (c.selectedDimension.DimensionId === item.selectedDimension.DimensionId)){
                        
                        const newItem = {...checkItem, itemQuantity: checkItem.itemQuantity + 1};

                        return newItem;
                        
                    }else{
                        return c;
                    }
                })

                localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));




            }else{

                const newCartItems = [item, ...cartItems];

                localStorage.setItem("cartItems", JSON.stringify(newCartItems));


            }



        }
        // localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },

    getCart(){
        const cartItems = JSON.parse(localStorage.getItem("cartItems"));

        return cartItems;
    },

    updateCart(cartItems){

        if(cartItems.length === 0){
            //remove
            localStorage.removeItem("cartItems");
        }else{
            localStorage.setItem("cartItems", JSON.stringify(cartItems));

        }

    }



}