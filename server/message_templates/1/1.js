var HTMLTemplate = function(title, date, user, username, textmessage){
  var standart = '<!DOCTYPE html>'+
  '<html lang="en">'+
  '<head>'+
  '<title>'+title+'</title>'+
  '<meta charset="utf-8">'+
  '<meta name="viewport" content="width=device-width">'+
  '<style type="text/css">'+
      '#outlook a{padding:0;}.ReadMsgBody{width:100%;} .ExternalClass{width:100%;}.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}body, table, td, a{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;}table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;}img{-ms-interpolation-mode:bicubic;}body{margin:0; padding:0;}img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}table{border-collapse:collapse !important;}body{height:100% !important; margin:0; padding:0; width:100% !important;}.appleBody a {color:#68440a; text-decoration: none;}.appleFooter a {color:#999999; text-decoration: none;}@media screen and (max-width: 525px) {table[class="wrapper"]{width:100% !important;}td[class="logo"]{text-align: left;padding: 20px 0 20px 0 !important;}td[class="logo"] img{margin:0 auto!important;}td[class="mobile-hide"]{display:none;}img[class="mobile-hide"]{display: none !important;}img[class="img-max"]{max-width: 100% !important;height:auto !important;}table[class="responsive-table"]{width:100%!important;}td[class="padding"]{padding: 10px 5% 15px 5% !important;}td[class="padding-copy"]{padding: 10px 5% 10px 5% !important;text-align: center;}td[class="padding-meta"]{padding: 30px 5% 0px 5% !important;text-align: center;}td[class="no-pad"]{padding: 0 0 20px 0 !important;}td[class="no-padding"]{padding: 0 !important;}td[class="section-padding"]{padding: 50px 15px 50px 15px !important;}td[class="section-padding-bottom-image"]{padding: 50px 15px 0 15px !important;}td[class="mobile-wrapper"]{padding: 10px 5% 15px 5% !important;}table[class="mobile-button-container"]{margin:0 auto;width:100% !important;}a[class="mobile-button"]{width:80% !important;padding: 15px !important;border: 0 !important;font-size: 16px !important;}}'+
  '</style>'+
  '</head>'+
  '<body style="margin: 0; padding: 0;">'+
  '<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
      '<tr>'+
          '<td bgcolor="#ffffff">'+
              '<div align="center" style="padding: 0px 15px 0px 15px;">'+
                  '<table border="0" cellpadding="0" cellspacing="0" width="500" class="wrapper">'+
                      '<tr>'+
                          '<td style="padding: 20px 0px 30px 0px;" class="logo">'+
                              '<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
                                  '<tr>'+
                                      '<td bgcolor="#ffffff" width="100" align="left">'+'<a href="http://alistapart.com/article/can-email-be-responsive/" target="_blank">'+'<img alt="Logo" src="http://134.249.117.218:5000/1/img/logo.jpg" width="52" height="78" style="display: block; font-family: Helvetica, Arial, sans-serif; color: #666666; font-size: 16px;" border="0">'+'</a>'+'</td>'+
                                      '<td bgcolor="#ffffff" width="400" align="right" class="mobile-hide">'+
                                          '<table border="0" cellpadding="0" cellspacing="0">'+
                                              '<tr>'+
                                                  '<td align="right" style="padding: 0 0 5px 0; font-size: 14px; font-family: Arial, sans-serif; color: #666666; text-decoration: none;">'+'<span style="color: #666666; text-decoration: none;">'+date+'</span>'+'</td>'+
                                              '</tr>'+
                                          '</table>'+
                                      '</td>'+
                                  '</tr>'+
                              '</table>'+
                          '</td>'+
                      '</tr>'+
                  '</table>'+
              '</div>'+
          '</td>'+
      '</tr>'+
  '</table>'+
  '<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
      '<tr>'+
          '<td bgcolor="#ffffff" align="center" style="padding: 70px 15px 70px 15px;" class="section-padding">'+
              '<table border="0" cellpadding="0" cellspacing="0" width="500" class="responsive-table">'+
                  '<tr>'+
                      '<td>'+
                          '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                              '<tr>'+
                                  '<td>'+
                                      '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                                          '<tbody>'+
                                               '<tr>'+
                                                    '<td class="padding-copy">'+
                                                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                                                            '<tr>'+
                                                                '<td>'+
                                                                    '<a href="http://kaleniuk.top/" target="_blank">'+'<img src="http://134.249.117.218:5000/1/img/responsive-email.jpg" width="500" height="200" border="0" alt="Can an email really be responsive?" style="display: block; padding: 0; color: #666666; text-decoration: none; font-family: Helvetica, arial, sans-serif; font-size: 16px; width: 500px; height: 200px;" class="img-max">'+'</a>'+
                                                                '</td>'+
                                                              '</tr>'+
                                                          '</table>'+
                                                    '</td>'+
                                                '</tr>'+
                                          '</tbody>'+
                                      '</table>'+
                                  '</td>'+
                              '</tr>'+
                              '<tr>'+
                                  '<td>'+
                                      '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                                          '<tr>'+
                                              '<td align="center" style="font-size: 25px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 30px;" class="padding-copy">'+title+'</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                              '<td align="center" style="padding: 20px 0 0 0; font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">This message was sent by the user - <a href="mailto:'+user+'">'+username+'</a> from the site portfolio.</td>'+
                                          '</tr>'+
                                      '</table>'+
                                  '</td>'+
                              '</tr>'+
                              '<tr>'+
                                  '<td>'+
                                      '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">'+
                                          '<tr>'+
                                              '<td align="center" style="padding: 25px 0 0 0;" class="padding-copy">'+
                                                  '<table border="0" cellspacing="0" cellpadding="0" class="responsive-table">'+
                                                      '<tr>'+
                                                          '<td align="center">'+'<a href="http://kaleniuk.top/" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #ffffff; text-decoration: none; background-color: #5D9CEC; border-top: 15px solid #5D9CEC; border-bottom: 15px solid #5D9CEC; border-left: 25px solid #5D9CEC; border-right: 25px solid #5D9CEC; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: inline-block;" class="mobile-button">To site &rarr;</a>'+'</td>'+
                                                      '</tr>'+
                                                  '</table>'+
                                              '</td>'+
                                          '</tr>'+
                                      '</table>'+
                                  '</td>'+
                              '</tr>'+
                          '</table>'+
                      '</td>'+
                  '</tr>'+
              '</table>'+
          '</td>'+
      '</tr>'+
  '</table>'+
  '<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
      '<tr>'+
          '<td bgcolor="#f8f8f8" align="center" style="padding: 70px 15px 0 15px;" class="section-padding-bottom-image">'+
              '<table border="0" cellpadding="0" cellspacing="0" width="500" class="responsive-table">'+
                  '<tr>'+
                      '<td>'+
                          '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                              '<tr>'+
                                  '<td>'+
                                      '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                                          '<tr>'+
                                              '<td align="center" style="font-size: 25px; font-family: Helvetica, Arial, sans-serif; color: #333333;" class="padding-copy">Message</td>'+
                                          '</tr>'+
                                          '<tr>'+
                                              '<td align="center" style="padding: 20px 0 0 0; font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">'+textmessage+'</td>'+
                                          '</tr>'+
                                      '</table>'+
                                  '</td>'+
                              '</tr>'+
                              '<tr>'+
                                  '<td>'+
                                      '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">'+
                                          '<tr>'+
                                              '<td align="center" style="padding: 25px 0 0 0;" class="padding-copy">'+
                                                  '<table border="0" cellspacing="0" cellpadding="0" class="responsive-table">'+
                                                      '<tr>'+
                                                          '<td align="center">'+'<a href="mailto:'+user+'" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #ffffff; text-decoration: none; background-color: #48CFAD; border-top: 15px solid #48CFAD; border-bottom: 15px solid #48CFAD; border-left: 25px solid #48CFAD; border-right: 25px solid #48CFAD; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: inline-block;" class="mobile-button">Callback &rarr;</a>'+'</td>'+
                                                      '</tr>'+
                                                  '</table>'+
                                              '</td>'+
                                          '</tr>'+
                                      '</table>'+
                                  '</td>'+
                              '</tr>'+
                          '</table>'+
                      '</td>'+
                  '</tr>'+
              '</table>'+
          '</td>'+
      '</tr>'+
  '</table>'+
  '<!-- COMPACT ARTICLE SECTION -->'+
  '<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
      '<tr>'+
          '<td bgcolor="#f8f8f8" align="center" style="padding: 70px 15px 70px 15px;" class="section-padding">'+
              '<table border="0" cellpadding="0" cellspacing="0" width="500" style="padding:0 0 20px 0;" class="responsive-table">'+
                  '<!-- TITLE -->'+
                  '<tr>'+
                      '<td align="left" style="padding: 0 0 10px 130px; font-size: 25px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #333333;" class="padding-copy" colspan="2">Resources for learning more</td>'+
                  '</tr>'+
                  '<tr>'+
                      '<td valign="top" style="padding: 40px 0 0 0;" class="mobile-hide">'+'<a href="https://litmus.com/community" target="_blank">'+'<img src="http://134.249.117.218:5000/1/img/litmus-logo.jpg" alt="Litmus" width="105" height="105" border="0" style="display: block; font-family: Arial; color: #666666; font-size: 14px; width: 105px; height: 105px;">'+'</a>'+'</td>'+
                      '<td style="padding: 40px 0 0 0;" class="no-padding">'+
                          '<!-- ARTICLE -->'+
                          '<table border="0" cellspacing="0" cellpadding="0" width="100%">'+
                              '<tr>'+
                                  '<td align="left" style="padding: 0 0 5px 25px; font-size: 13px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #aaaaaa;" class="padding-meta">Litmus Community</td>'+
                              '</tr>'+
                              '<tr>'+
                                  '<td align="left" style="padding: 0 0 5px 25px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #333333;" class="padding-copy">A growing community for email professionals</td>'+
                              '</tr>'+
                              '<tr>'+
                                   '<td align="left" style="padding: 10px 0 15px 25px; font-size: 16px; line-height: 24px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">Share knowledge, ask code questions, and learn from a growing library of articles on all things email.</td>'+
                              '</tr>'+
                              '<tr>'+
                                  '<td style="padding:0 0 45px 25px;" align="left" class="padding">'+
                                      '<table border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">'+
                                          '<tr>'+
                                              '<td align="center">'+
                                                  '<!-- BULLETPROOF BUTTON -->'+
                                                  '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">'+
                                                      '<tr>'+
                                                          '<td align="center" style="padding: 0;" class="padding-copy">'+
                                                              '<table border="0" cellspacing="0" cellpadding="0" class="responsive-table">'+
                                                                  '<tr>'+
                                                                      '<td align="center">'+'<a href="https://litmus.com/community" target="_blank" style="font-size: 15px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #ffffff; text-decoration: none; background-color: #F6BB42; border-top: 10px solid #F6BB42; border-bottom: 10px solid #F6BB42; border-left: 20px solid #F6BB42; border-right: 20px solid #F6BB42; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: inline-block;" class="mobile-button">Learn More &rarr;</a>'+'</td>'+
                                                                  '</tr>'+
                                                              '</table>'+
                                                          '</td>'+
                                                      '</tr>'+
                                                  '</table>'+
                                              '</td>'+
                                          '</tr>'+
                                      '</table>'+
                                  '</td>'+
                              '</tr>'+
                          '</table>'+
                      '</td>'+
                  '</tr>'+
                  '<tr>'+
                      '<td valign="top" style="padding: 40px 0 0 0;" class="mobile-hide">'+'<a href="http://templates.mailchimp.com" target="_blank">'+'<img src="http://134.249.117.218:5000/1/img/mailchimp-logo.jpg" alt="Freddie!" width="105" height="105" border="0" style="display: block; font-family: Arial; color: #666666; font-size: 14px; width: 105px; height: 105px;">'+'</a>'+'</td>'+
                      '<td style="padding: 40px 0 0 0;" class="no-padding">'+
                          '<!-- ARTICLE -->'+
                          '<table border="0" cellspacing="0" cellpadding="0" width="100%">'+
                              '<tr>'+
                                  '<td align="left" style="padding: 0 0 5px 25px; font-size: 13px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #aaaaaa;" class="padding-meta">MailChimp Template Reference</td>'+
                              '</tr>'+
                              '<tr>'+
                                  '<td align="left" style="padding: 0 0 5px 25px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #333333;" class="padding-copy">A stunning introduction to email design and coding</td>'+
                              '</tr>'+
                              '<tr>'+
                                   '<td align="left" style="padding: 10px 0 15px 25px; font-size: 16px; line-height: 24px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">MailChimp&rsquo;s Fabio Carneiro unleashes an amazing resource for learning more about all aspects of email design.</td>'+
                              '</tr>'+
                              '<tr>'+
                                  '<td style="padding:0 0 45px 25px;" align="left" class="padding">'+
                                      '<table border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">'+
                                          '<tr>'+
                                              '<td align="center">'+
                                                  '<!-- BULLETPROOF BUTTON -->'+
                                                  '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">'+
                                                      '<tr>'+
                                                          '<td align="center" style="padding: 0;" class="padding-copy">'+
                                                              '<table border="0" cellspacing="0" cellpadding="0" class="responsive-table">'+
                                                                  '<tr>'+
                                                                      '<td align="center">'+'<a href="http://templates.mailchimp.com" target="_blank" style="font-size: 15px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #ffffff; text-decoration: none; background-color: #5D9CEC; border-top: 10px solid #5D9CEC; border-bottom: 10px solid #5D9CEC; border-left: 20px solid #5D9CEC; border-right: 20px solid #5D9CEC; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: inline-block;" class="mobile-button">Learn More &rarr;</a>'+'</td>'+
                                                                  '</tr>'+
                                                              '</table>'+
                                                          '</td>'+
                                                      '</tr>'+
                                                  '</table>'+
                                              '</td>'+
                                          '</tr>'+
                                      '</table>'+
                                  '</td>'+
                              '</tr>'+
                          '</table>'+
                      '</td>'+
                  '</tr>'+
                  '<tr>'+
                      '<td valign="top" style="padding: 40px 0 0 0;" class="mobile-hide">'+'<a href="http://www.campaignmonitor.com/resources/" target="_blank">'+'<img src="http://134.249.117.218:5000/1/img/campaign-monitor-logo.jpg" alt="Campaign Monitor" width="105" height="105" border="0" style="display: block; font-family: Arial; color: #666666; font-size: 14px; width: 105px; height: 105px;">'+'</a>'+'</td>'+
                      '<td style="padding: 40px 0 0 0;" class="no-padding">'+
                          '<!-- ARTICLE -->'+
                          '<table border="0" cellspacing="0" cellpadding="0" width="100%">'+
                              '<tr>'+
                                  '<td align="left" style="padding: 0 0 5px 25px; font-size: 13px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #aaaaaa;" class="padding-meta">Campaign Monitor Guides</td>'+
                              '</tr>'+
                              '<tr>'+
                                  '<td align="left" style="padding: 0 0 5px 25px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #333333;" class="padding-copy">A fantastic library of information</td>'+
                              '</tr>'+
                              '<tr>'+
                                   '<td align="left" style="padding: 10px 0 15px 25px; font-size: 16px; line-height: 24px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">Campaign Monitor puts out some amazing resources. These guides, as well as their Ultimate Guide to CSS, are constant companions.</td>'+
                              '</tr>'+
                              '<tr>'+
                                  '<td style="padding:0 0 45px 25px;" align="left" class="padding">'+
                                      '<table border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">'+
                                          '<tr>'+
                                              '<td align="center">'+
                                                  '<!-- BULLETPROOF BUTTON -->'+
                                                  '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">'+
                                                      '<tr>'+
                                                          '<td align="center" style="padding: 0;" class="padding-copy">'+
                                                              '<table border="0" cellspacing="0" cellpadding="0" class="responsive-table">'+
                                                                  '<tr>'+
                                                                      '<td align="center">'+'<a href="http://www.campaignmonitor.com/resources/" target="_blank" style="font-size: 15px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #ffffff; text-decoration: none; background-color: #4FC1E9; border-top: 10px solid #4FC1E9; border-bottom: 10px solid #4FC1E9; border-left: 20px solid #4FC1E9; border-right: 20px solid #4FC1E9; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: inline-block;" class="mobile-button">Learn More &rarr;</a>'+'</td>'+
                                                                  '</tr>'+
                                                              '</table>'+
                                                          '</td>'+
                                                      '</tr>'+
                                                  '</table>'+
                                              '</td>'+
                                          '</tr>'+
                                      '</table>'+
                                  '</td>'+
                              '</tr>'+
                          '</table>'+
                      '</td>'+
                  '</tr>'+
              '</table>'+
          '</td>'+
      '</tr>'+
  '</table>'+

  '<!-- FOOTER -->'+
  '<table border="0" cellpadding="0" cellspacing="0" width="100%">'+
      '<tr>'+
          '<td bgcolor="#ffffff" align="center">'+
              '<table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">'+
                  '<tr>'+
                      '<td style="padding: 20px 0px 20px 0px;">'+
                          '<!-- UNSUBSCRIBE COPY -->'+
                          '<table width="500" border="0" cellspacing="0" cellpadding="0" align="center" class="responsive-table">'+
                              '<tr>'+
                                  '<td align="center" valign="middle" style="font-size: 12px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color:#666666;">'+
                                      '<span class="appleFooter" style="color:#666666;">1234 Main Street, Anywhere, MA 01234, USA</span><br><a class="original-only" style="color: #666666; text-decoration: none;">Unsubscribe</a><span class="original-only" style="font-family: Arial, sans-serif; font-size: 12px; color: #444444;">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span><a style="color: #666666; text-decoration: none;">View this email in your browser</a>'+
                                  '</td>'+
                              '</tr>'+
                          '</table>'+
                      '</td>'+
                  '</tr>'+
              '</table>'+
          '</td>'+
      '</tr>'+
  '</table>'+

  '</body>'+
  '</html>';

  return standart
}

module.exports = HTMLTemplate;
