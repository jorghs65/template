$(document).ready(function () {

	$('html').removeClass();
	$('body').empty();

	var body = `
        <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div class="container" style="margin-bottom:0px; padding-bottom:0px;">
            <!-- start.container -->
            <div id="panel-left" class="noprint">
                <!-- start.left panel -->
                <div id="site-logo-container" class="panel-row">
                    <a href="http://www.portofinointl.com/" id="portofino-site-logo" title="Portofino International Trading USA, Inc." style="background:url(images/portofino-logo-2.jpg) no-repeat transparent;"></a>
                </div>
                <div id="menu-container" class="panel-row">
                    <script type="text/javascript">
                        function selectItem(id) {
                            if (id.className == "item-selected") {
                                id.className = "";
                            } else {
                                id.className = "item-selected";
                            }
                        }
                        
                        
                        function resetItem(div_class) {
                            $("div." + div_class + " a.item-selected").removeClass("item-selected");
                        }
                    </script>
                    <ul class="dropdown-menu parent-ul vertical-menu" role="menu" aria-labelledby="dropdownMenu">
                        <li class="list-group-item"><a href="products.php?status=2" style="color:#8C0000; font-size:15px;" class="highlight" id="new-items-tooltip">NEW ITEMS</a></li>
                        <li class="list-group-item"><a href="products.php?status=1" style="color:#8C0000; font-size:15px;" class="highlight" id="new-arrivals-tooltip">BACK IN STOCK</a></li>
                        <div id="new-items-tooltip-box" class="coming-soon-box" style="display: none; margin-left: 130px; margin-top: -15px; width: 150px; height: 45px;">New Portofino<br>products</div>
                        <div id="new-arrivals-tooltip-box" class="coming-soon-box" style="display: none; margin-left: 130px; margin-top: 5px; width: 150px; height: 45px;">New Arrivals<br>of existing products</div>
                        <li class="list-group-item"><a href="sale.php?view=grid&status=2" style="color:#8C0000; font-size:15px;" class="highlight">SALE</a></li>
                        <li class="list-group-item"><a href="outlet.php?view=grid&status=4" style="margin-bottom:20px;color:#8C0000; font-size:15px;" class="highlight">OUTLET</a></li>
                        <li class="list-group-item"><a href="shop_by_item.php" style="margin-top:5px;margin-bottom:2px;color:#8C0000; font-size:15px;" class="highlight">SHOP BY ITEM</a></li>
                        <li class="dropdown-submenu">
                            <a href="category.php?cl=1&cid=11314" style="text-transform:uppercase;">Event Decor</a>
                        </li>
                        <!--  <div id="product-hero" class="" style="margin-bottom:10px;">
                            <a href="category.php?cl=1&cid=11314"><img src="images/event.jpg" width="720" /></a>
                            </div> -->
                        <li class="dropdown-submenu">
                            <a href="category.php?cl=1&cid=11315" style="text-transform:uppercase;">Party & Craft</a>
                        </li>
                        <!--  <div id="product-hero" class="" style="margin-bottom:10px;">
                            <a href="category.php?cl=1&cid=11315"><img src="images/party.jpg" width="720" /></a>
                            </div> -->
                        <li class="dropdown-submenu">
                            <a href="category.php?cl=1&cid=11316" style="text-transform:uppercase;">Religious Gifts & Keepsakes</a>
                        </li>
                        <!--  <div id="product-hero" class="" style="margin-bottom:10px;">
                            <a href="category.php?cl=1&cid=11316"><img src="images/religious.jpg" width="720" /></a>
                            </div> -->
                        <li style="display:none;" class="list-group-item">SHOP BY EVENT</li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Baby_Shower" style="text-transform:uppercase;">Baby Shower</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Baptism" style="text-transform:uppercase;">Baptism</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Craft_Supplies" style="text-transform:uppercase;">Craft Supplies</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Decorations" style="text-transform:uppercase;">Decorations</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Event_Planning" style="text-transform:uppercase;">Event Planning</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="First_Communion" style="text-transform:uppercase;">First Communion</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Floral_Supplies" style="text-transform:uppercase;">Floral Supplies</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Gifts_Favors" style="text-transform:uppercase;">Gifts & Favors</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Glassware" style="text-transform:uppercase;">Glassware & Vases</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Graduation" style="text-transform:uppercase;">Graduation</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Holiday_Seasonal" style="text-transform:uppercase;">Holiday & Seasonal</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Home_Decor" style="text-transform:uppercase;">Home Decor</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Jewelry" style="text-transform:uppercase;">Jewelry</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Mardi_Gras" style="text-transform:uppercase;">Mardi Gras</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Mi_Presentacion_De_3_Anos" style="text-transform:uppercase;">Mi Presentacion De 3 Años</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Party_Supplies" style="text-transform:uppercase;">Party Supplies</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Quinceanera" style="text-transform:uppercase;">Quinceañera</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Religious" style="text-transform:uppercase;">Religious</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Ribbon_Trimming" style="text-transform:uppercase;">Ribbon & Trimming</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Wedding" style="text-transform:uppercase;">Wedding</a></li>
                    </ul>
                    <p style="margin-top: 204px;"></p>
                    <div class="left-link-container" style="margin: 0 0 28px 10px !important;">
                        <div class="highlight-red" style="padding-bottom:5px;">VIEW CURRENT CATALOG</div>
                        <a href="https://issuu.com/portofinoadmin/docs/catalog_2024_forweb?fr=xKAE9_zU1NQ" target="_blank"><img src="uploads/catalog/Tiny catalog icon.jpg" width="179" border="0"></a>
                    </div>
                    <div class="highlight-red" style="margin-left:10px; line-height:15px;">SEARCH BY SAINTS   <span style="cursor: pointer;" class="open_close">   + Open</span></div>
                    <!-- IMAGE PICKER -->
                    <div class="religious_container" style="display:none;">
                        <div id="imagePicker" class="left-scroll-panel scroll-panel-ht385 ps-container">
                            <div class="scroll-content">
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=GU|GU1&sname=Our Lady of Guadalupe" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Our-Lady-of-Guadalupe.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">OUR LADY OF GUADALUPE</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=DN&sname=Divine Child" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Divine-Child.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">DIVINE CHILD</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=JU&sname=St. Jude" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Jude.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. JUDE</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=MI&sname=St. Michael" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Michael.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. MICHAEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=DM&sname=Divine Mercy" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Divine-Mercy.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">DIVINE MERCY</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=SHJ&sname=Sacred Heart of Jesus" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Sacred-Heart-of-Jesus.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">SACRED HEART OF JESUS</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=LG&sname=Lady of Grace" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Lady-of-Grace.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">LADY OF GRACE</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=CX&sname=Crucifixion" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Crucifixion.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">CRUCIFIXION</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=ANT&sname=St. Anthony" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Anthony.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. ANTHONY</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=CHA&sname=San Charbel" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/San-Charbel.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">SAN CHARBEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=GAB&sname=St. Gabriel" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Gabriel.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. GABRIEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=GA&sname=Guardian Angel" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Guardian-Angel.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">GUARDIAN ANGEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=HF&sname=Holy Family" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Holy-Family.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">HOLY FAMILY</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=HT&sname=Holy Trinity" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Holy-Trinity.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">HOLY TRINITY</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=IC&sname=Immaculate Conception" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Immaculate-Conception.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">IMMACULATE CONCEPTION</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=JO&sname=St. Joseph" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Joseph.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. JOSEPH</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=JL&sname=San Juan Del Los Lagos" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/San-Juan-Del-Los-Lagos.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">SAN JUAN DEL LOS LAGOS</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=MCS&sname=St. Martin De Tours" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Martin-De-Tours.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. MARTIN DE TOURS</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=MP&sname=St. Martin of Porres" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Martin-of-Porres.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. MARTIN OF PORRES</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=ATO&sname=Nino De Atocha" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Nino-De-Atocha.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">NINO DE ATOCHA</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=CA&sname=Our Lady of Carmel" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Our-Lady-of-Carmel.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">OUR LADY OF CARMEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=RP&sname=St. Raphael" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Raphael.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. RAPHAEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&color=RA&sname=St. Raymond" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Raymond.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. RAYMOND</span>
                                    </a>
                                </div>
                            </div>
                            <div class="ps-scrollbar-x-rail" style="width: 190px; display: none; left: 0px; bottom: 3px;">
                                <div class="ps-scrollbar-x" style="left: 0px; width: 0px;"></div>
                            </div>
                            <div class="ps-scrollbar-y-rail" style="top: 0px; height: 385px; display: none; right: 3px;">
                                <div class="ps-scrollbar-y" style="top: 0px; height: 0px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="left-link-container"> </div>
                    <script type="text/javascript">    
                        /*$(document).ready(function() {
                            var open_close_val = $('.open_close').text();
                            if(open_close_val == '+ Open'){
                                $('.open_close').click(function() {
                                    $('.religious_container').show('slow', 'linear');
                                    $('.open_close').text('- Close');   
                                });
                            }
                            if(open_close_val == '- Close'){
                                $('.open_close').click(function(){
                                    $('.religious_container').hide('slow', 'linear');
                                    $('.open_close').text('+ Open');
                                });  
                            }
                        });*/
                        /*$(document).ready(function() {
                        $('.open_close').clickToggle(function() {
                            $('.open_close').text('- Close');
                        }, function(){
                            $('.open_close').text('+ Open');
                        });*/
                        
                        $(document).ready(function(){
                        $('.open_close').click(function(){
                        
                        $('.religious_container').slideToggle('slow');
                        if($(this).text() == '- Close')
                        {
                            $(this).text('+ Open');
                        }
                        else
                        {
                            $(this).text('- Close');
                        }
                        });
                        
                        });
                    </script>                    
                </div>
                <!-- end.left panel -->
            </div>
            <div id="panel-right" class="">
                <!-- start.rightpanel -->
                <!-- level one -->
                <div id="panel-right-level-one-menu" class="panel-row" style="margin-top:5px; margin-bottom:5px;">
                    <div id="panel-right-menu-container" class="float-left noprint">
                        <!-- menu -->
                        <ul class="top-menu">
                            <li><a href="index.php">HOME</a></li>
                            <li><a href="https://www.portofinointl.com/about_us">ABOUT US</a></li>
                            <li><a href="quick_order.php" id="quick-order-soon-txt">QUICK ORDER</a></li>
                            <li><a href="signup.php" id="login-user">LOG IN / REGISTER</a></li>
                            <li style="padding-right: 0;"><a href="shopcart.php" id="login-user">VIEW CART</a></li>
                        </ul>
                        <!-- end.menu -->
                    </div>
                    <div id="quick-order-soon-box" class="coming-soon-box" style="margin-left: 123px; margin-top: -20px; ">Coming Soon</div>
                    <div id="panel-right-search-container" class="float-right noprint" style="margin-right:2px;">
                        <!-- search -->
                        <form role="form" name="frmTopSearch" id="search-box-top" action="logs/search_log.php" method="get">
                            <input type="hidden" name="search" value="1">
                            <input type="text" class="form-control top-search-field fontRoboto txt-11" id="search-term" name="keyword" value="Search" onfocus="this.value='';" style="color:666666; font-weight:normal;">
                            <img src="images/magnifying-glass-1127234809.jpg" width="15" height="15" id="search-box-btn" align="right" style="border:none; cursor:pointer;" onclick="document.frmTopSearch.submit();">
                        </form>
                        <!-- end.search -->
                    </div>
                    <div class="clearfix"></div>
                </div>
                <!-- level one -->
                <!-- level two -->
                <div id="panel-right-level-two-menu" class="panel-row">
                    <div class="noprint">
                        <p><strong><span style="color:#FF0000">YOUR PREMIER BUSINESS TO BUSINESS SUPPLIER. </span>IMPORTER/EXPORTER OF CRAFTS, GIFTS, PARTY & DECORATING SUPPLIES</strong></p>
                    </div>
                    <!-- top content -->
                    <div class="clearfix" style="width:750px;height:5px"> </div>
                    <div id="panel-right-content" class="panel-row" style="width:720px;">
                        <div id="featured-product">
                            <div id="product-description" class="noprint">
                                <span id="parent-category">LOG IN / REGISTRATION</span>
                            </div>
                        </div>
                        <form method="post" action="process.php">
                            <input type="hidden" name="option[]" value="signin">
                            <table class="login-register-form-table" border="0" style="margin-top:28px; width:50%;">
                                <tbody>
                                    <tr>
                                        <td class="txt-13 bottom-border" colspan="2">
                                            <strong class="fontMontserrat">RETURNING CUSTOMERS PLEASE LOGIN</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <br><br>        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td nowrap="nowrap" class="float-left" style="padding-top:5px;">
                                            <span class="field-label">E-mail Address:</span>
                                        </td>
                                        <td width="100%" style="padding-top:5px;">
                                            <input type="text" name="email" value="" maxlength="250" style="width:100%;">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td nowrap="nowrap" class="float-left" style="padding-bottom:5px; padding-top:5px;">
                                            <span class="field-label">Password:</span>
                                        </td>
                                        <td width="100%" style="padding-bottom:5px; padding-top:5px;">
                                            <input type="password" name="pwd" value="" maxlength="250" style="width:100%;" autocomplete="off">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div style="float:left;">
                                                <input class="btn btn-primary btn-cart-submit-button text-left-button btn-login-button" name="btn_submit_login" id="btn_submit_login" type="submit" value="LOG IN">
                                            </div>
                                            <div style="float:right;" align="right" class="txt-13">
                                                Forgot Your Password? Click <a href="signup.php?sec=pass" style="color:#FF0000; font-weight:bold;">HERE</a><br>
                                                New Customer? Click <a href="signup.php?sec=reg" style="color:#FF0000; font-weight:bold;">HERE</a><br>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <!-- end.top content -->
                    <!-- end.rightpanel -->
                </div>
                <div class="clearfix"></div>
                <div style="margin-top:50px;" class="noprint"><a href="content.php?pgID=31#priceguaranteepolicy"><img src="images/blrb20160202110641web_banner_r.png" border="0" width="717" height="110"></a></div>
                <div class="clearfix"> </div>
                <!-- END.container -->
            </div>
            <div class="container ">
                <!-- start.container -->
                <!-- PANEL -->
                <!-- PANEL -->
                <div id="footer-container-security-logos" class="panel-row noprint" style="margin-bottom:64px; margin-top:-10px;margin-left:205px; width:720px;">
                    <p>
                        <a href="#"><img src="/images/elavon-logo.jpg" style="height:33px; width:70px"> </a><img src="/images/security-logo-cc.png" style="height:20px; width:140px">   
                        <span id="siteseal">
<img style="cursor:default;cursor:hand" src="https://seal.godaddy.com/images/3/en/siteseal_gd_3_h_l_m.gif">
                        </span>
                        <br>
                        Copyright © 2024 Portofino International Trading USA, Inc. All rights reserved.
                    </p>
                </div>
                <!-- END.container -->
            </div>
            <script src="js/vendor/bootstrap.min.js"></script>
            <script src="js/main.js"></script>
            <script>
            var zoomConfig = {
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 750,
                zoomWindowWidth: 360,
                zoomWindowHeight: 360,
                constrainType: "height",
                constrainSize: 274,
                borderSize: 1,
                containLensZoom: true,
                gallery: 'palette-images-selection',
                cursor: 'pointer',
                galleryActiveClass: "active"
            };
            
            function DoToAll(obj_input) {
                bol_is_checked = (obj_input.checked) ? true : false
                for (x = 0; x < obj_input.form.length; x++) {
                    obj_input.form.elements[x].checked = bol_is_checked;
                }
            }
            $(function () {
            
            
                //thumbnail_item = $('.details-image .palette-images .palette-item');
                //product_image  = $('#product-selected-image > img');
                product_active_image = $('#product-image-file');
            
                product_active_image.elevateZoom(zoomConfig);
            
                product_active_image.bind("click", function (e) {
                    var ez = product_active_image.data('elevateZoom');
                    ez.closeAll();
                    return false;
                });
            
                $('#datetimepicker6').datetimepicker({
                    icons: {
                        date: "fa fa-calendar",
                    },
                    pickTime: false
                });
            
                $('#slides').slidesjs({
                    width: 720,
                    height: 400,
                    navigation: {
                        active: false
                    },
                    play: {
                        active: false,
                        auto: true,
                        interval: 4000,
                        swap: false
                    }
                });
            
                $('#slides-small').slidesjs({
                    width: 234,
                    height: 270,
                    navigation: {
                        active: false
                    },
                    play: {
                        active: false,
                        auto: true,
                        interval: 4000,
                        swap: false
                    },
                    effect: {
                        fade: {
                            speed: 800
                        }
                    },
                    pagination: {
                        active: false
                    },
                });
            
            
                $("#search-by-price-soon").mouseover(function () {
                    $("#search-soon-box").css('margin-top', '-4px');
                    $("#search-soon-box").css('margin-left', '5px');
                    $("#search-soon-box").show();
                });
                $("#search-by-price-soon").mouseout(function () {
                    $("#search-soon-box").hide();
                });
            
                $("#search-special-soon").mouseover(function () {
                    $("#search-soon-box").css('margin-top', '29px');
                    $("#search-soon-box").css('margin-left', '7px');
                    $("#search-soon-box").show();
                });
                $("#search-special-soon").mouseout(function () {
                    $("#search-soon-box").hide();
                });
            
            
                $("#twitter-soon").mouseover(function () {
                    $("#social-media-soon-box").css('margin-top', '-135px');
                    $("#social-media-soon-box").css('margin-left', '340px');
                    $("#social-media-soon-box").show();
                });
                $("#twitter-soon").mouseout(function () {
                    $("#social-media-soon-box").hide();
                });
            
            
                $("#blog-soon").mouseover(function () {
                    $("#social-media-soon-box").css('margin-top', '-135px');
                    $("#social-media-soon-box").css('margin-left', '450px');
                    $("#social-media-soon-box").show();
                });
                $("#blog-soon").mouseout(function () {
                    $("#social-media-soon-box").hide();
                });
            
            
                $("#pinterest-soon").mouseover(function () {
                    $("#social-media-soon-box").css('margin-top', '-135px');
                    $("#social-media-soon-box").css('margin-left', '505px');
                    $("#social-media-soon-box").show();
                });
                $("#pinterest-soon").mouseout(function () {
                    $("#social-media-soon-box").hide();
                });
            
            
                $("#instagram-soon").mouseover(function () {
                    $("#social-media-soon-box").css('margin-top', '-135px');
                    $("#social-media-soon-box").css('margin-left', '560px');
                    $("#social-media-soon-box").show();
                });
                $("#instagram-soon").mouseout(function () {
                    $("#social-media-soon-box").hide();
                });
            
            
                $("#footer_34").mouseover(function () {
                    $("#sitemap-soon-box").css('margin-top', '-58px');
                    $("#sitemap-soon-box").css('margin-left', '810px');
                    $("#sitemap-soon-box").show();
                });
                $("#footer_34").mouseout(function () {
                    $("#sitemap-soon-box").hide();
                });
            
            
                $("img").on("contextmenu", function () {
                    return false;
                });
            
            
                var security_question = null;
                $('#forgotpassword_email').keyup(function (event) {
                    clearTimeout(security_question);
                    //alert ($(this).val());
                    security_question = setTimeout(getSecurityQuestion($(this).val()), 5000);
                });
            
            
                $('.modal').on('show.bs.modal', centerModal);
                $(window).on("resize", function () {
                    $('.modal:visible').each(centerModal);
                });
            
            
            });
            
            function centerModal() {
                $(this).css('display', 'block');
                var $dialog = $(this).find(".modal-dialog");
                var offset = ($(window).height() - $dialog.height()) / 2;
                // Center modal vertically in window
                if (offset < 0) offset = 0;
                $dialog.css("top", offset + 'px');
            }
            
            
            function getSecurityQuestion(q) {
                $.post("ajax_security_question.php", {
                        email: q
                    },
                    function (data) {
                        if (data != 'error') {
                            //alert(data);
                            $('#security-question-out').html(data);
                            $('#security_question').val(data);
            
                        } else {
                            $('#security-question-out').html("");
                        }
                    });
            }
            
            
            function submitOnEnter(e, submitType, objForm, callFunction) {
            
                code = e.keyCode || e.which;
            
                if (code == 13) {
            
                    if (submitType == "submit") {
                        objForm.submit();
                    } else if (submitType == "call") {
                        callFunction();
                    }
                }
            }
            </script>
            <script src="js/jquery.slides.min.js"></script>
            <script src="js/vendor/jquery.mousewheel.js"></script>
            <script src="js/vendor/perfect-scrollbar.js"></script>
            <script src="js/vendor/jquery.ddslick.min.js"></script>
            <script src="js/vendor/moment.min.js"></script>
            <script src="js/vendor/bootstrap-datetimepicker.js"></script>
            <script src="js/vendor/jquery.elevatezoom.js"></script>
            <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
            <script>
                jQuery(document).ready(function($) {
                "use strict";
                $('#colorPicker').perfectScrollbar();
                $('#imagePicker').perfectScrollbar();
                //$('#inspirationGallery').perfectScrollbar();
                // $('#youMayAlsoLike').perfectScrollbar();
                //$('#inYourCart').perfectScrollbar();
                // $('#itemsYouHaveViewed').perfectScrollbar();
                $('#termsOfUse').perfectScrollbar();
                });
                               
            </script>
        </div>
    `;




	addBody(body).then(function () {
        changeUrl('https://www.portofinointl.com/signup.php');

	});


	function addBody(body) {
		return new Promise(function (resolve, reject) {
			$('body').append(body);
			resolve();
		});
	}


	function changeUrl(newURL) {
		var url = window.location.href;
		window.history.replaceState({}, document.title, newURL);

	}


});