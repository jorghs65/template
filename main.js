

$(document).ready(function(){
    $('#panel-right-content').empty();



    var htmlString = `
    <div id="featured-product">
        <div id="product-description" class="noprint">
            <span id="parent-category">LOG IN / REGISTRATION</span>
        </div>
    </div>
    <form method="post" action="process.php">
        <input type="hidden" name="option[]" value="signin">
        <table class="login-register-form-table" style="margin-top:0; width:50%;" border="0">
            <tbody>
                <tr>
                    <td class="txt-13 bottom-border" colspan="2">
                        <strong class="fontMontserrat">RETURNING CUSTOMERS PLEASE LOGIN</strong>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><br><br></td>
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
    </form>`;
    

    
    
    $('#panel-right-content').append(novoConteudo);
});