import { useEffect } from 'react';
import "@/styles/page.module.css"
const Tracktext = ({ text }) => {
  useEffect(() => {
    const truncateText = (element) => {
      const lineHeight = parseInt(getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * 2; // دو خط
  
      if (element.offsetHeight > maxHeight) {
        const words = element.innerText.split(' ');
        let truncatedText = '';
    
        for (let i = 0; i < words.length; i++) {
          truncatedText += words[i] + ' ';
      
          if (element.offsetHeight <= maxHeight) {
            break;
          }
        }
    
        element.innerText = truncatedText.trim() + '...';
      }
    }

    const element = document.querySelector('.ellipsis');
    truncateText(element);
  }, []);

  return <p className="dis ellipsis">{text}</p>;
};

export default Tracktext;
