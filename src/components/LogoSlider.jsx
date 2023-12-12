import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class LogoSlider extends Component{
  render(){
    const settings = {
      slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    };
    return(
      <div className="mainContainer">
        <Slider {...settings}>
        <div className='container'>
        <img src='https://logowik.com/content/uploads/images/aco-gruppe7259.jpg' />
      </div>
      <div className='container'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJ46N8CMb1ODKg5YLOjUaTKgnywEtSOLVPiGZBnFCFw&s' />
      </div>
      <div className='container'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKyB15eDomSha1jLVn5w5jp5VHebGvtiA74UPlF9A2g&s' />
      </div>
      <div className='container'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxiO9sWIgL7R5CwlsrZGq_fTgW9zDB-OFgrF7O4EJV7g&s' />
      </div>
      <div className='container'>
        <img src='https://logowik.com/content/uploads/images/alcon.jpg' />
      </div>
      <div className='container'>
        <img src='https://asset.brandfetch.io/idh85SOEuh/idR1cvaNiI.png' />
      </div>
      <div className='container'>
        <img src='https://media.licdn.com/dms/image/C4D0BAQE5SVMhyi8ZYQ/company-logo_200_200/0/1631349515453?e=2147483647&v=beta&t=5QyBA2zVc4WscIZDE8Eu-2g-EJpsgk6a0sWYimLNSrc' />
      </div>
      <div className='container'>
        <img src='https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg' />
      </div>
      <div className='container'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gfsrToi5DoCTFRY7-QrleqaM05oLVpSCP69LQ8jRdA&s' />
      </div>
      <div className='container'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kP7Q-JEvvAvFz1VDYVRDBK0eTeGEJKqXbeBq140STg&s' />
      </div>
      <div className='container'>
        <img src='https://download.logo.wine/logo/Auchan/Auchan-Logo.wine.png' />
      </div>
      <div className='container'>
        <img src='https://autonet.az/web/img/new-logo-fb.png' />
      </div>
      <div className='container'>
        <img src='https://imworld.ro/2016/wp-content/uploads/2016/08/Avangate-logo-04.png' />
      </div>
      <div className='container'>
        <img src='https://logowik.com/content/uploads/images/axa5054.jpg' />
      </div>
      <div className='container'>
        <img src='https://storage.googleapis.com/mrfinance.appspot.com/wordpress/1/2020/03/banca-transilvania-logo.png' />
      </div>
      <div className='container'>
        <img src='https://1000logos.net/wp-content/uploads/2020/03/McLaren-Logo-2002.jpg' />
      </div>
      <div className='container'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mercedes_Benz_Logo_11.jpg/800px-Mercedes_Benz_Logo_11.jpg?20130508224951' />
      </div>
      <div className='container'>
        <img src='https://plazaromania.ro/wp-content/uploads/2017/02/bcr_logo.jpg' />
      </div>
      <div className='container'>
        <img src='https://dynamicassets.basf.com/is/image/basf/basf-light-blue:16x9?dpr=off&fmt=webp-alpha&fit=crop%2C1&wid=1256&hei=710' />
      </div>
      <div className='container'>
        <img src='https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/eeftn25do44bbml1yvh2' />
      </div>
      <div className='container'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png' />
      </div>
      <div className='container'>
        <img src='https://romanianyellowpages.ro/wp-content/uploads/2014/06/brd-logo-primary1.jpg' />
      </div>
      <div className='container'>
        <img src='https://res.cloudinary.com/dkatmtbbc/image/upload/v1/publications/mohhvabthsw6nqyhfp3m.jpg' />
      </div>
      <div className='container'>
        <img src='https://www.casa-antonie.ro/wp-content/uploads/2018/08/carrefour.jpg' />
      </div>
      <div className='container'>
        <img src='https://www.logo.wine/a/logo/HBO/HBO-Logo.wine.svg' />
      </div>
      <div className='container'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png' />
      </div>
      <div className='container'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kaufland_201x_logo.svg/2048px-Kaufland_201x_logo.svg.png' />
      </div>
      <div className='container'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lidl-Logo.svg/2048px-Lidl-Logo.svg.png' />
      </div>
        </Slider>
      </div>
    );
  }
}

export default LogoSlider;
