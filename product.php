<?php 

include "partials/head.php";

if($_SERVER['REQUEST_URI'] = "product.php"){
    
}

?>

<body>

    <header>
        <h1>tralala lalala</h1>
    </header>
    
    <nav>
        <ul>
            <li><a href="index.php">Produkty</a></li>
            <li><a href="cart.php">Košík</a></li>
        </ul>
    </nav>
    
    <main>

        <section>


            <div id="productPageBox">
                <div class="productBox">

                    <div class="productInfo" id="productInfo">

            
                        <form action="#" method="post">
                            <select name="size" id="size">
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="39">39</option>
                            </select>

                            <select name="color" id="color">
                                <option value="čierna">čierna</option>
                                <option value="biela">biela</option>
                                <option value="červená">červená</option>
                            </select>

                            <ul>
                                <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                            </ul>
                        </form>
                    </div>
                    
                </div>
            </div>


        </section>

    </main>

    <footer>
        <p>created by me</p>
    </footer>

</body>

<script src="assets/scripts/scripts.js" async defer></script>    
<script src="https://kit.fontawesome.com/4c2f3a8e33.js" crossorigin="anonymous"></script>
</html>