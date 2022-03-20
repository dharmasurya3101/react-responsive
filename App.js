import logo from './logo.svg';
import './App.css';
// import Basicmovie from './basicmovie';
// import Webpage from './webpage';
// import BasicCart from './basicCart';
import TopBar from './topBar';
import ImageSection from './components/imageSection';
import BasicCart from './components/basicCart';
import ImageResponsive from './components/imageResponsive';
import Form from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import BasicStates from './components/basicStates';
import BasicBind from './components/basicBind';
import BasicCondition from './components/basicCondition';
import BasicList from './components/basicList';

function App() {
  return (
    <div className="App">
      {/* <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
        <BasicCart name="Samsung" price="20k" path="data:image/jpeg;base64,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"/>
       </div>
        <div className='col-md-4'>
        <BasicCart name="Apple" price="30k" path="data:image/jpeg;base64,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" />
        
        </div>
        <div className='col-md-4'>
           <BasicCart name="LG" price="40k" path="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESFBgSERIYGBgYGhsYGBIYGBgYGBgYGBkaGRgYGBkcIS0kGx0qHxgaJTclKi40NDQ0GiM9PzozPy0zNDEBCwsLEA8QHxISHTcrIyo0MzMzMzMxMzMzMzM1MTQzMzMzMzMzMzMzMzMzMzMzNjMzMzMzMzMzMzMzMzMzMzMzM//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAQUBAAAAAAAAAAAAAAAABwECAwQFBgj/xABPEAACAQIDAggICgcFBwUAAAABAgADEQQSIQUxBgciMkFRYXETFzM0coGRsxRSVHOSobGyw9FCgpPBwtLTFiNio/AkNURTdOHxFUODorT/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIEAwX/xAApEQACAQIFAwQDAQEAAAAAAAAAAQIDERIhMTJRBBOBM0FxkSJhoRTB/9oADAMBAAIRAxEAPwByEzgOEPGMtBiuFw/hbGxrM+SmSN+QAFn77AdpnR8Lq5TDMqmxqMqX/wAJ1f2qrD1xEcIMSWqHoA0A6ABO1KmpZszV6rjaK1Z2T8a2Nvph8PbtapeU+NjHfJ8N9KpFoSZQWnR048HNVZ8jN8bOO+T4f6VSR428b8nw/wBKpFgWlN4sEeClUmNDxuY35Nh/pVPykeN3GfJsP9Kp+UV95MWBcD7khoeNzG/JsP8ASqflDxuY35Nh/pVPyivheGCPAdyQ0fG3jfk2H+lU/KVDjaxnybD/AE6n5RWhpUGjwR4E6kx07F40M7hcThcin/3aT+Ey9rIVDW7r90Y1GqrqHQhlYAhgbgg6gg9U8xbMrsrqQemPfgFiC1FqZ3KwZR1K4uR3Zgx9cmpSUVdFUarlLCzrJx/CTh7g8CwRyXYkjTmgroQWAJOunJB1BBsQZuOE+NNDDO6kg8lbjQgMwVmB6CFJI7RPMZZsXVapWe2bNbdYZVJVFubAaBR3icoxud27Dl8b+D+Ktu01b/VSh438H1L7a39KKTEbFoojMK6MQxUIDqwzWzCxOltfz3zC+BJ1H2zp2ZM5urFa3HR438J1L7a39KT438J1J7a39KJY4JOo+2a+omVrEbj7RJlBx1RUZqWjHx438J1J7a39KHjfwnUntrf0ohnYHctvXJVxmvlFurq9sgsfHjfwnUvtrf0oeN/CdS/539OIhmDaAa36AP3TOXBLYXvfp16ZUYOWhMpqOo6PG/g+pf8AO/pSfG/hOpfbW/pRMfAU6j7ZsU2DRbOVr0sqU2qXZspdhfLTRSbsxI9V+69dqSIVWL0HPsbjQwGIqCmboSL5hdkFrc66q3TvCkAAkkATukcMAykEEXBGoIO4g9InlTbezEw1X+4xAqBQjCqmlmZVYgEE2Ksbb+joj34rNqNiMJZjzcpXsVhygOzwi1LDoBA6JEo2OkZXO4hCEko5vht5FPnPw6kQm2D/AHrd8ffDbyKfOfh1IgtreUbvmujtZh6j1F8GtMpMqMpMpkooMJUFJNgLk6ADUk9kmtSdDldSpH6LAg+wyDoUQl7EUijJTXVyoLaXsXGZVAO8hSCSevslmg2aoqMRyjlDWAsToL20IvaTjV7Fqm7XCEGUg2O8aEdsJRACVCUiVCMlmXgzyhHxxecx/Rp/bUiGwnOEfPF35N/RT7XhV2BR9TwZ3D/zGp+r9s824Ecn1mekeH/mNT9X7Z5uwXN9ZkUNfs71tpn1kW5K6jTXdfov7ZatLqsMtunpH75doYR6mq5bZglyyjlMrMBYm+oRu8i2+a7W1MbzeRjWgVHVNidk1coa6akLkzAEEuUFyeTbMp1vIOy6vg/CW0HRZv8AmeC35ct8/Re8V4hhlwa7IOoQyDqE21DYeIdigUAhUblXGjgEdHbrKK2yaqK7nKQl7kZiOS+Q2bLl53Re/ZD8R2ka0LC02uy9h4nFOyUKeYoqs3KUABhdRcneersMxqeAqsbBRcsyWLIDnQqClidGuyi3TfSSqkG3FNXWqvmr6Bgla9jEtAzIGDqFPCWGW1wcyC/O0Avcnksbb9Jjy7IlpotYnmt3GOPiU81b0U95XicxPNPcfsjk4lPNm9FPeV5lrrPwbOn0GZCEJlNBzXDfyCfOfh1Igtq+Ubvj94ceQT5z8OpEFtQ/3jd82UdrMPUeovg1xlJlRlJjZKL2DxT0aiVU5yMGF91xMjbu16mMqmtVtmyhdB0Lu+2a8yDIsr3OibtYq2q9sQ2tubr+qstFwaiBbc5ebe28dJ3mTtRlaqWJ0ZVIt15QCD3EGWcEoLpY7mBa+4AEXM4vcaY7fBnYvyj+m33jLMrqvmZm6yT7TeUTuZiZIkSoRksycLzhHzxc+Tb0af8AHELhecI+OLfyb9yfxwq7B0fU8Gw4f+Y1O9ftnm3Bc31mekuH/mVTvX7Z5twQ5PrMjp932dq+0ygZk4bFPT1ptbUNuUjMAyg2IO4O3t7piCXJuMTy0Ms7Qq5cmfk3UhQAFXJzcq7l110Gsp+G1LZeSRaxJRCxGfwlixW5GbW17TFhFhQ8T5NhR2tXpsHpuEawF0RFuFXKoYBbMANBeW6mPqMGDFeVcE5EzWZ85GfLmAza2BmHCLCuAxvk2Ozts4nDMz0KhQsoVrBSCFFl0IIuOuWKWOqLqGBuXJzKrauAHPKB1IAF+/rMxYSVTipOSSu9XbN20HjdrXL1PEuqsgIytvBVTrYi4JHJNiRcSzCEsllGI5rdx+yOLiU82b0U95XidxHNbuP2RxcSnmzegnvMRMfUa+DX0+gzYQhMppOZ4c+br85+HUiC2n5Ru+Pjh5WUUUQnVnJA7FR7/aIhtp+UbvmujtMXUb18GAZEkyDKZCKDIkmRJKIZQdDIVAN0vtTygX6Rf1dH2SqlRznKu87u+17RZXOlnYsQhCMkkSoSkSoRkMv4bnCPHi4xHOp2301a/osy2+uI7Dc4R08XB/vD8wPvxVNg6XqeDd8YdXLgmFucwXu0Zv4Z5zwPN/WM9EcZPmY+cH3HnnfADk/rGLp9TtX0ZlUgCwB3XF5kDKtT+8W4FwV7cpC63HTaYwl6vULkuRYnfbdut+6bGZLmcmIwoN/Bt079dCuX43Xr+8WtB8ThiLeDbQEDcNTa1yDru6frmtk2isGIzTVw5JshtZjqWBJFiqjlHQ2se++kuPWwoJUIStxytTewYacsG2q99ju0mttCFgxfo2LV8KQL0mG4adQOt+Vqbe3s3yh62HJUlGGUWsBo2lgSM99D269cwIQsGIz0rYUWvSY6C+p6jf8AS67fl14Jt0SLSbRpWE3ct4jmH0T9kcPEp5s3oJ7zERP4jmH0T9kbfEriF8E1K/K8EjWseb4XEC9++ZOo1NXT6eRpQhCZDWcVxif8P6VT7kSG0+e3fHxw+wwalTqEm6MwA0scyNe/0Yh9pc5u+bKOww9RvRgGQZJkRshFMiTIklF+tUDBT0hQpHo6Aj1W9hleCqKjh2/Q5QXrYc0d17eoTFhFYvFlYgSYQjESJUJSJUIyGXsPvEd/FtUW7LlGbwasG6QuYgr6yQfVEhh94jo4tj/et8wPvxVNg6XqeDdcY2X4GbqCc65Sf0TZtR22uPWZ562YBl5V7Zje2+eg+Mk/7GPnB9x5562fzP1jFQ3Lydq+1+Dsk4LE0FqIyu75R4OzXV3XNlLbrgdFu6/TpMfgXoVDTqLlNtVO8bxf6ptth8IKlJSjajTKcoJQg71v2FtN15e4V4tsXV8MtN1Qqo5QPOUWOu7/AMzUr3sZHa1zQYDC+EbJcAnQXYKL9pO6WqlErvFvr7J3fAPYtGqGepTDOjcgOC1Nri3LX1n1gS7ws4Ps9RBSRFcnLamMqWXRWt0Hu6olUWKwOOVxdlZBEZOx+Apq0VFVAj5yTUtyig3gi40Og3aWJ6Zp9scE3So1OlTdrGwa2/d+loDoY1Ui3YbptK5xwWXEolj6r99urrnQYng09Gwq5gWubKFIUC+rG9u3Q207ZjB0phlCg6ABiNcwB1XvzHXqjxcCUc8zXvgHsrAXVrDMNQG3FTbpB+qxl7D7OuQGYAMbA6XuLi+W97XFry/hLvUAJIFy1gdBobWF7Xnc7K4N1XoAKqDQMhN86ksXzKwurA6XFtO3dIlO2p0jFM5jb3BLwWF8MrMTlcMrLk5Shm0U681T130tN/xKeUb/AKVf/wBNeZ3CLGLWwOIBuWWnULAg3RgmVgehdTcdY3SniUwq+Datc5vBIltLW8NiG9t5lqtvU0UkvYasJEmcDuczw782Hpj7rzz/ALR57d8f/DzzYemPuvPP+0ee3fNVLaYuo3r4MMykyoykymQimRCXKKAsAd0ktFuE2mJwyBDybEbmHdcXmMMNruYjIGHaSASAbdp9klSTKcWjEhLlenlYju6b7xfqEtyhEiVCUyoQJZeobxHlxZ0lyO9tQqKG6cpLEj2geyI2hvEevFj5Op3U/wCOFTaOl6ng2XGDSVsE5IuVZWU9RJy39jEeuec9njknvM9H8PvManen3hPOOzuZ+sZPT7vs619p2nB/gu9VDVd1WxstMjMztbMt1vuIzH9UzuK2Ap4jCovgRdUGTKvNsNUc7ycxO4dMXGytsVKRpgHko+cLcgEkEG4HTYtrv1jd2HtTD1OUhym25iRu1Oh0G8ajfp1TtUclmcIKLyNbSwtOmECqqFLMKYJ0U6AFibu2t5n4dhUYC46LEXvYnUGxB3jf9syX2alR8zAEi4VR0AzS47hDhcKyIrhWzgVbUy2nTYZl7eUL7txuJylNWOkacmzqkTKEvlFrC3Lc2ItYMbEakakHd7NdV2jh6lQU2ZFbMVdKr+DcKLlWVCDmvY77aX7ppNr7dwPhEqU6lNmXk+EXk1VQKTZH0C77ANpyjppOB2nixVqVGJzlyWNWwQnoXOo5J0sL2HfOWazNKinkxlbS2jgKjVMPWqIv6AYBmJDAMDmy20a4ABIOmt7gaHafApzl+CEVEYXuxXfbnBh0a7pwLs+ikWtpqb6dFuoXvGBsDhi9OjfELZKaCkhTV3cbgoPTlGpJtye+ONRoU6SZj0+BNUc4nPbOCGuB0c3L1noPRNrs/HVMARRxRU3UZKiiw00CnqGlhprOhw+1xUoLWS+V1OUkWYEEi7AbtR0TQbR2SmITNicSqtq/TZUF7DXduNj9s6qTlqcZRwvLUr4Q1KOLwOJqK4OShWYouW2bwbWzg3NwRcEWOnfMbiT82f0KfvMRNPi9lNQw2KaizVFejVBOYbsjHM2lgQL9V9R0zccSfm7+hT97iZyqKzOtN3QzoQhOR0OX4e+aj0x9x55/2hz2756A4feaj0x9x55/x/PbvmmjtMXUb18GGZBkmQ0pkookyIRDLj1nYWJ0lGY9ZkQhYdwvCEIDCVCUyoQJZfw+8R1cWeIYO1Kwymkr36bq5UDusxiVw+8RycWXlm/6dfeGFTaOl6hvOMmuy4MKLWeoqN3BWfT1oJ582aeQfSP7o/8AjOt8ET55fX/d1J5+2dzD6R/dFQ1Xk6V9r8G1wGGapUVF3knpF7DU27bXjG2bsZsIwqOzZLLc6cm5tyr23aajcSIs6ZZTmFxbpnU4LhLWdbVCGtYC40UGw5vTaw9pmqSb0MsWrDNqbDo1HoVLuDTYlGRyBYgkltb6kAW7ZyW0eDFT4VXqVKYCAO1FMygVTbMqA3Fludb2IGg3XGz2JtZPBeEd15GZ1S9gND067+wSrhDtPD4iioeqihlDBcwLAsB0DUWmR0/yszYqto5HK7O2BRptkxeIQgIzmmrZmz3tyjoN1tQfsMytlcHVWohp1bqDndLZjdHuqg9RA39YPq5XFUmpOUYg63DAghhqLgi/T0TfbN221KkqU7FyxI33FlJJt0i1z6507KsR33c6nH8ElxTeFKGk5ZmcLlYvmRQBcnKObbdvJJ6zxm3eD9XD0kd3VM7kphwwe9hYnOptmXcejt6A0GruuH5VdEe1/CWsBlOpIPRbS/r7JzXCzZuIxlSm6EOngyUKM7IzouZmY2tTJOgN/wBEdM4te52jL2bNFsva1anhstS5CDklbWH6JD26jbf7ZgVNrh6lM2AF9zE5Rck2I3Fb6zscdQwdLCUqdcOAyG4RiFDuVYnM2ptcAXJFib33zRYfF4PDUHKuripfLQdVYlVJykkaqSevotO0NuhwnuMThPRxK0qjUK4egEIyKygU8yOXUJpfQtbTdp0TpuJLzd/Qp+9xMXWMepUpMwO5HLL0AZDuHcvsHfZi8SXm7+hT97iZxqxsd6croZ8IQnE6HLcPvNR84PuPEBj+e3fH/wAP/NV+cH3HiAx/PbvM00dpir718GGZBkmUmUyUUwhCIYCSykbxBTY3lTvfcLdkCiiEIQAJUJTJEBMyKG8R5cWAHg6htrlpi/04jKG8R68V/k6ndT/jhU2hS9TwbTjB8xqd9P76xAcGMAcQ60g6pnZgGbde1wO87h2megOMHzGp30/vrPPmx8ngtS2fOdx0y2H13+yTQ1+ztXaUc/0MSpwVpUqFiCah5xB0y6WK5jzSNfbacxj9kPSPJtfLmyg30169+6RsnHtSqAA3DDJci+/QDu1tabnE4trKS5vqNwGvVp29X5TWk1qYJSu7o5enWYgi5sbG3df8zB310MzsRhUZizsEzBiCATmYW0HVv7JaTBoSLVFtY8rtBNtOiOyByZLUnqkMqE6albWW2hLG3rseuRXwrqMxG4nVSDutryTu137pi1yBpcHXo3dUopB1OZCVJBsb5SQdCAen/vCxSkjZUsUznK7Ei2q3JvlFx2Hd9U3GB4WVKeSm2tNLiwJVlBBF1ZdVYdY65zq4hwGV1JsLjoK2JBI06Sd56pXjAgfNTIZH3X3g2GYG+4gnfIcUzops2G1tsvi6uYkhVsqJckDcOnrIuT2TJ2hgsOaCVDV5VgQurPbQMW6xqpAuNCJqcBh18LlqAEK3KS9r5ScwJ6NAZ0e28LTrVP8AY/BtmNNrISCjBbMGXpUkLuGlhoZM24r8S4Wk7SOXx65abimXKlHBO4Cy8rvBt9UY/Ekf9nf0KfvcTOO2psrEYOjWStTuhpOVqJcpZwcuvRrbeAd06/iQ8g/oU/e4qY5Sk73NajFWsNGTIkyCjluH/mq/OD7jzz/tDnt3megOH/mq/OD7jxAY/nt3maaO0x196+DDMpMqMpMpkIphCEQwhCECghCEACSJEkQJL9DeI9OK7ydTup/iRFUN8evFd5Op3U/xIVdpVL1PBteMHzGp6VP3iTzjs48g95/dPR3GF5hU9Kn71J5v2eOQe8/uk0Ny8nSvt+jtdm8Eq9Sh8JqVFpLlDqCMzlDfl5QRYbu3UTExxq4VglWnctqtTXK631K3Hd/q0YOwtrpi6a5VyqqoGJdTygApQplBWwJsbkWHbOP4wsXh2qJQw9iKQcuQ4dQ75bqGAte6m/eOm4HSnUk5Wf79iKlBRV8tObnNVK5qG5sDuA7B0XlC1T1ns6JZQX/KVqt9FBJ13a/ZNJlaKmfeTr2y7hqutjc77Dpv/hlFFb5hrzTZesi3X1b/AFSyDaIL2LqsWuOk/b1euX6CO4Zb7lJAJANgczW05RG/KNdD1Szh62Rg1r2vfrIYWIv0aXseibLDYY50dKgzZksqMQ4L7mLAAKey9+iDdioq5hY2oTUe4OrHQ79Cd/XJwOPqUXFSmQGGoJAOo1Bsem4l3beJNWs1QsWJygsb3JVQpYg7rkE+uYCrBK6Btp5HWf2nxdfC16NVg6+BqC5AzaqTv6bXHqnU8R/kKnoU/e4qcknB1zgquLWsqKKT8gG5bKpzAi532nWcR/kKnoU/e4qY61r5Gyje2Y04QhM53OV4f+bL84PuPEDj+e3eY/8Ah/5svzg+5UiAx/PbvmmjtMVfevgwzKDKzKDKZKIhCERYQhCABCEIAEkSIQJL9DeI9eK7ydTup/iRFUN4j04rvJ1O6n+JCptKpep4NtxheYVPSp+9Secdncz9Y/uno7jC8wqelT96k84bO5nrP7pNDcvJ0r7fo29HDYdguasUY7wULDf16AC1ukzHxSIrWpuXW3OK5dekW6e+WoCbEv2ZG8tCAbHSXhU7Bf41zm9evZ1dMswEYGfh6yIysbvlKsVHJvqCwzHcbCwNjvlnEVA7FlTKN9hra56/XaUK1rjoOh+3T2SUQkGwNrb+ga9MVhX9i2DMrB4hkYEa6i63IDDqNv8AQmM6Fd/UD7dZIY23evpPfG8xaG6dcOxqB6gzEWpMoOUjMSc5NrEiw6pRjNnpToJVSor5myEKDyHUXYG/qt175qZt9gJ4TwlFyfBlGew6KiryG677xbpvIatmXFpu1jB/9TqJQq0QxyOrXXttp9kZXEb5Cp6FP3uKirxlJkVgw+MPWosY0+I7yNT0KfvcVM1fU1UG7ZjVhCEzGg5Xh/5svzg+48QOP57d5j+4f+bJ84PuVIgNoc9u8zVS2mKvvXwYZlJkmRGxIiEIRFBCUwgBVCUyqABCEBAC/Q3iPTiu8nU7qf4kRdDeI9OK3mVe6n+JCptCl6ng23GF5hU9Kl75J5w2dzPWf3T0fxh+YVPSpe+pzzfs7mes/uk0NV5OtfadZgeDxfDnEueSGVCoYBgzLmXS2un+tJqdoYTwTAA3B1B+0GbjZHCAUlswU83MjrnR8vNJA1BGuoIOp6CRNdtvaXwmoagVVBNwirlUXtey3NhoNJ6BjZseDPBSrjkd6bJZCAUL5W1vZjodDYj9UzE4R7AqYKoKdS1yoYWOYWYkAg96sPVMrgzwpqYEOtNUYPluHViOSWK81gQeU3tmNwm4QVMdUFSoqLlUIFRSqhVLEWBJO92nP8r+1v6W8OH9mz4G8F1xgqV67OtGiQreDtmdmtyVzaAAEEntFpuuFfAbD08M2LwFV2VbZ6bHMcpNiVNgQRfUHo+vU8B+E9PCpVwuIzLSrEN4VVztTcWBJX9IEKN17EDQ3m64S8LsF8FbBYAu3hNHruHGmYMw5YzEtqNwUXMzydTGraXz4sdIxjhbbWnm5weBwxrPluQABc7zYWAA7Z0dXge7Kxoi7IOUudDqOg9R0M0WzqrUqlyLXG64v0EFes3t9c61eGFGjRqZAGruSAqqwVSLgO7MbHUk2XTdumfrJVlnTvfKySy1zuV01aCvCpBWd3d/GhxuzMC+IqpSQgFzbMdwAF2Y9wBM6vD7GwQqeAoYqqmIGYLU3KzLcMBYAGxVhof0TqZy2xcc2GrJWVc2Q3K9akFWHsJnVJtPZFOocZTNVqhu4oFbAO1762t+kf0iBfQaC25nGnhzucvwmoeDqVE6i+neSd3Rrf2Rh8RvkanoU/e4qLnbjvUerUqAB2XMwG4EoDb7IxuI3yNT0KfvcVM9f2+DRR9/kasIQmU0HLcP/Nk+cH3KkQG0Oe3eY/8Ah/5unzo93UiA2hz27zNNHaYq+9fBhGUmVGUymJBCEvmnT+OfaD167uwadslspK5jQmUadPTlf/YdZ3m3VaHg6fQ191tba6dHtiuVhMWEyPAre2v+ujd9cssACQI0xNWCEIRiL9DeI9OK/wAnV9Gl+JEVQ3iPTit5lX0aX4kVTYFL1PBuOMHzCr6VL31Oebtnc31n909IcYf+76vpUvfU55x2WhZcqgklrADeSbAAdsVDX7Otbb9GRJvGPguLNLKmIxgSswzGiihsuhNrluVuOthuPVM3xUUvlb/s1/mnfvx5ODoTWqFVCNTxUUvllT9mv80PFVS+WP8AQX+aHeiHZkKwSuM/xV0vlb/QX+aVLxW0vlb/AEF/mj70ROhIV6kjUHdJIjQHFXS+Vv8AQX+aT4q6Xyt/oL/NF3o8h2JCyRMzAKLX3+zX1aTIwuGBqWfmrmZtCRyFLZT3kBb/AOKMmnxXU1IIxj6f4FH8UzMdwCpVE8EuKyObNzBYqgygZM18uZrnXe3dF3ojVGVsxb0eWXBZdKVUgOLq5yNfp52tx3CdxxGeSq+hT97ipxe0dm1MLUq0XC5kp1ATrlYFCVZTpobi31zs+IzyVX0KXvcVOVb/AId6Q14QhMp3OU4wPN0+dHu6kQOP57d5j+4wT/s6fOj3dSIHH89u8/bNVHaYq/qL4MEykyoykymCIhCEQwk3kQiAqznrPtlMIRgEkSJIgBfobxHnxW8yr6NL8SIuhvEefFYeRV9Gl+JCptCn6ng3XGD/ALvrd9L31Oec9iVzSKVFFyjq4B3XUqwB9YnozjB/3fW76Xvqc82bOfkkdIN/Uf8AxIo6rydq18I+sPws2biMlU4zwWqO1BzkYOnQW6R0GxINujWbM8Ltm/LaP0xPPsJ1XTxWSZx774PQP9rdmfLaP0xI/tds35ZR+mIgICP/ADrkf+h8D9/tbs35ZR+mJI4WbN+WUfpiI3ZVKg9VVxNVqVM3zVFUuRYG3JGpubD1zL25hcFTKDBYpq4N8+ak1PKRbLbMBmvc91u2T2Y3tdh3na9h0jhbs35ZR+mJUOFuzfllH6Ynn+EfYXJP+h8HoH+12zPllH6Ylmpwm2WG+EHGJyFKcli2jcq2VRcnk7uzsiEmwwNMNSq5lYgWZWG4Mt9D6mg6EeSl1DfsZ3DPbi4zEVa6LZCuRL6NkVSLkdZNz67TteIvyVX0KXvcTFRiXsjX6iPWY1uIrydb0KXvMVIrJLJcF0G3dvkbMIQmU0HI8ZF1wfhOinURm7FYmmSeweEue6IPG8495nqLF4ZKqNSqKGR1Ksp3MrCxB9UT23+KvFK5ODZK1P8ARR2yVVHQpYgq47TYzvTmoqzOFWm5NNCxMpM7Txc7UP8AwZ/bUbe28qPFttT5J/n0vzl4lyc8D4OIhOzfi62oNPgTHtFajb70jxd7U+RP+2o/zQxR5HhfBxsJ3NLiy2owv8GC9jV6d/qBkvxY7TAv8HU9grpc91wIsUeQwvg4WE7Hxd7U+Qv+2ofzSRxdbU+RP+2ofzQxR5DC+DjZVOzPFxtT5GT/APNR/OVLxa7UK5vgtv8ACa9LN+X1x4o8hglwcfR3x48UyE0a1W3JLLTU9fg1JYj1uR3gzj9i8VuOqOPhATDpflNnFWoR1KF5IPaTp1GOTZWzqWFpJh6C5UQWUdPWST0kkkk9JJkVJpqyLp02pXZr+GeEargq6qCSFDgDUnwbK5AHWQtp5WYMjEbiD0f63T2PFpwp4q6GKdquGcU2Y3NNlJS535SuqDs1HVYaTmmdmIb4ZU+N9Qk/DKnxvqEZ/iaxev8AeUOwB6mv+XpKF4m8bfVqFvnan9OVilyThjx/BZ/DKnxvqEPhlT431CM5uJvGX0ehb52p/TkjiaxnTUoftKn9OGKXP9DDHj+Cw+G1PjfUIDHVPjfUPyjRXiZxXTUofTqH+CT4mMT/AM2j9Op/JDFLkWGPH8Fd8OqfG+oflI+G1PjfUPyjS8TWK/5lD6dX+SR4msV8fD/Tq/yQxS5DDHj+CvGOqfG+oflLw2tXCFA9lNrgKovbdc213xk+JvF/Hw/7Sr/JKk4m8V+lUw/ZZ6p/ghifIWivb+CqqVWbeSeof9o9+JHAOmFqVXFg7Ki/4hTLsSP1qrL3oZi7F4nkRg2KrAgb6dIG57PCNqB3AHtEaOEwtOii06ShUQBVRRYADcBJb/ZaRkQhCSMiTCEAIhCEAASYQgBEmEIAEIQgAQhCABIkwgAQhCABCEIAEIQiAIQhAAhCEAIkwhAAhCEYBCEIAf/Z" />
        
        </div>
      </div>      
       
    </div> */}
    {/* <BasicStates /> */}
    {/* <BasicBind /> */}
    {/* <BasicCondition /> */}
    <BasicList />
    </div>
  );
}

export default App;
