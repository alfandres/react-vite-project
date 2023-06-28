import './loading.css'

function loading ( ) {

    return(
    <div class="spinnerContainer">
        <div class="spinner"></div>
        <div class="loader">
         <p>loading</p>
            <div class="words">
                <span class="word">cards</span>
                <span class="word">images</span>
                <span class="word">category</span>
                <span class="word">price</span>
                <span class="word">posts</span>
            </div>
        </div>
    </div>

    )

}

export { loading }