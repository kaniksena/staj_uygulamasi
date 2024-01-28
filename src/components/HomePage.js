// AnaSayfa.js

import React from 'react';
import TopMenu from './TopMenu';
import ContentBox from './ContentBox';
import './homePage.css'

function AnaSayfa() {
  return (
    <div className="anasayfa-container">
      <TopMenu />
      <div className="content-container">
        <ContentBox title="SOFTWARE DESIGN ENGINEER INTERNSHIP" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Phasellus sollicitudin, libero sit amet tincidunt placerat, purus nulla tincidunt lorem, sit amet mollis sem nibh in urna. 
                   Mauris nec finibus felis. Mauris id faucibus nulla, eu egestas neque. Maecenas sed ante erat. Nunc aliquam ante vitae urna tincidunt sollicitudin. 
                   Fusce et hendrerit erat, eu malesuada felis. Nam convallis lacinia lectus, sit amet accumsan erat tristique sit amet. Nulla mollis lectus quam, id lobortis nisl pulvinar elementum. 
                   Pellentesque sed nunc risus. Sed placerat nunc non augue vulputate, non facilisis ante mollis. Suspendisse sollicitudin scelerisque tortor, a efficitur neque aliquam vel. 
                   Vivamus nec justo eget ipsum porttitor scelerisque quis vitae diam. Vestibulum ut nunc dolor. Vestibulum semper vel lorem ut facilisis. Suspendisse iaculis elit quis arcu dapibus elementum." />
        <ContentBox title="SOFTWARE DESIGN ENGINEER INTERNSHIP" content="KLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Phasellus sollicitudin, libero sit amet tincidunt placerat, purus nulla tincidunt lorem, sit amet mollis sem nibh in urna. 
                   Mauris nec finibus felis. Mauris id faucibus nulla, eu egestas neque. Maecenas sed ante erat. Nunc aliquam ante vitae urna tincidunt sollicitudin. 
                   Fusce et hendrerit erat, eu malesuada felis. Nam convallis lacinia lectus, sit amet accumsan erat tristique sit amet. Nulla mollis lectus quam, id lobortis nisl pulvinar elementum. 
                   Pellentesque sed nunc risus. Sed placerat nunc non augue vulputate, non facilisis ante mollis. Suspendisse sollicitudin scelerisque tortor, a efficitur neque aliquam vel. 
                   Vivamus nec justo eget ipsum porttitor scelerisque quis vitae diam. Vestibulum ut nunc dolor. Vestibulum semper vel lorem ut facilisis. Suspendisse iaculis elit quis arcu dapibus elementum." />
        <ContentBox title="Başlık 3" content="Kısa bir dummy yazı" />
        <ContentBox title="Başlık 4" content="Kısa bir dummy yazı" />
      </div>
      
    </div>
  );
}

export default AnaSayfa;
