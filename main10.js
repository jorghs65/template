

$(document).ready(function(){
    $('#panel-right').empty();



    var panelRight = `

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
                <img src="images/magnifying-glass-1127234809.jpg" id="search-box-btn" style="border:none; cursor:pointer;" onclick="document.frmTopSearch.submit();" width="15" height="15" align="right">
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
                <div id="product-description" class="noprint">
                    <span id="parent-category">LOG IN / REGISTRATION</span>
                </div>
            </div>
            <form method="post" action="process.php">
                <input type="hidden" name="option[]" value="signin">
                <table class="login-register-form-table" style="top:10px !important; width:50%;" border="0">
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
                            <td class="float-left" style="padding-top:5px;" nowrap="nowrap">
                                <span class="field-label">E-mail Address:</span>
                            </td>
                            <td style="padding-top:5px;" width="100%">
                                <input type="text" name="email" value="" maxlength="250" style="width:100%;">
                            </td>
                        </tr>
                        <tr>
                            <td class="float-left" style="padding-bottom:5px; padding-top:5px;" nowrap="nowrap">
                                <span class="field-label">Password:</span>
                            </td>
                            <td style="padding-bottom:5px; padding-top:5px;" width="100%">
                                <input type="password" name="pwd" value="" maxlength="250" style="width:100%;" autocomplete="off">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div style="float:left;">
                                    <input class="btn btn-primary btn-cart-submit-button text-left-button btn-login-button" name="btn_submit_login" id="btn_submit_login" type="submit" value="LOG IN">
                                </div>
                                <div style="float:right;" class="txt-13" align="right">
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
    <div style="margin-top:50px;" class="noprint"><a href="content.php?pgID=31#priceguaranteepolicy"><img src="images/blrb20160202110641web_banner_r.png" width="717" height="110" border="0"></a></div>
    <div class="clearfix">&nbsp;</div>
    <!-- END.container -->
    
    `;
    
    $('#panel-right').append(panelRight);

var footer=`

            <div id="footer-container-security-logos" class="panel-row noprint" style="margin-bottom:64px; margin-top:-10px;margin-left:205px; width:720px;">

				
				
            </div>    
            
            
      

`;
    $('#panel-right').after(footer);

});