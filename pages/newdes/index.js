import BlogItem from '@/Commponent/BlogItem';
import Circals from '@/Commponent/Circals';
import ImageItem from '@/Commponent/ImageItem';
import ImageStoryBox from '@/Commponent/ImageStoryBox';
import ItemOption from '@/Commponent/ItemOption';
import LineItemRed from '@/Commponent/LineItemRed';
import NavBar from '@/Commponent/Navbar';
import OptionItem from '@/Commponent/OptionItem';
import OptionItemTwo from '@/Commponent/OptionItem2';
import Slideshow from '@/Commponent/SlideShow/SliderHomePage';
import TypeSubText from '@/Commponent/TypeSubText';
import { Box, Container, Grid, Input, TextField, Typography, styled } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('ok')

    try {
      // درخواست لاگین به بک‌اند
      const response = await axios.post('http://localhost:3002/login', {
        username,
        password
      });

      const { token } = response.data;

      // ذخیره توکن در localStorage
      localStorage.setItem('token', token);

      // ریدایرکت به داشبورد
      window.location.href = '/newdes/dashbord';
    } catch (error) {
      console.error(error.response.data);
      // پیغام خطا در صورت وجود
    }
  };


  // const images = [
  //   'https://dkstatics-public.digikala.com/digikala-adservice-banners/98d0c52c68daa732ea2a34b345fec80322654476_1690974366.jpg',
  //   'https://dkstatics-public.digikala.com/digikala-adservice-banners/b7ce26b91a2ec80e633bf9cf7fdfc527f451ac7a_1690898814.jpg',
  //   'https://dkstatics-public.digikala.com/digikala-adservice-banners/61fcbe4ce7991f5f6c0c1845cca5a68652da2d4d_1690699957.jpg',
  //   // ...
  // ];

  const images = [
    { url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/98d0c52c68daa732ea2a34b345fec80322654476_1690974366.jpg', alt: 'Image 1' },
    { url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/b7ce26b91a2ec80e633bf9cf7fdfc527f451ac7a_1690898814.jpg', alt: 'Image 2' },
    { url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/61fcbe4ce7991f5f6c0c1845cca5a68652da2d4d_1690699957.jpg', alt: 'Image 3' },
  ]




  return (
    <>
      {/* <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">ورود</button>
      </form> */}
      <Circals />
      <Container container='true' sx={{
        backgroundColor: 'black'
      }}>

        <NavBar />
        <Slideshow images={images} />
        {/* <Container container="true" sx={{ border: 'solid 1px blue' }}>
          <Grid container sx={{ border: 'solid 1px green', display: 'flex', justifyContent: 'center', marginTop: '20%' }} >
            <Grid sx={{ border: 'solid 1px red', textAlign: 'center', margin: '50px', }} xs={6} md={4} >
              <Typography>Test</Typography>
            </Grid>
          </Grid>
        </Container> */}
        <Container maxWidth='true' sx={{ my: 3, mt: '80px' }}>
          {/* <OptionItem /> */}
          <OptionItemTwo />

          <LineItemRed
            persianText={'مسیر یادگیری دوره'}
            englishText={'The course of learning the course'}
          />
          <TypeSubText text={'آموزش های دوره اینستاگراف به دو دسته ثابت و متحرک تقسیم میشود , نمونه ثابت همون عکس نوشته هایی هستش که قطعا تو خیلی از پیج ها دیدید، ولی ما برای اولین تو ایران طراحی متحرک بدون نیاز به افترافکت یا بلندر بهتون آموزش دادیم که میتونید نمونه جلسات دوره را پایین همین صفحه ببینید'} />
          <ImageStoryBox />
          <LineItemRed
            persianText={'برای دیدن سوالات تصادفی جدیدتر می‌توانید صفحه را رفرش کنید!'}
            englishText={'Sample projects carried out in the course'}
          />

          <ItemOption />
          <ImageItem />
          <BlogItem />
        </Container>
      </Container>



    </>
  );
};
