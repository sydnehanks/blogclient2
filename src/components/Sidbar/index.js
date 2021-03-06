import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';


/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

const [posts, setPosts] = useState([]);

useEffect(() => {
  const posts = blogPost.data;
  setPosts(posts);
},[posts]);

  return(
    <div className="sidebarContainer">
      <Card style={{marginBottom: '20px', padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>About Me</span>
        </div>

        <div className="profileImageContainer">
            <img src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExIVFRUVFxUVFRUYFxcXFRUVFxYWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0lHyArLS0tLS0tLS0tLS0tLSstKy0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tKy0rLS0tK//AABEIAKQBNAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAYFBwj/xABAEAABAwEEBwUGBAUCBwAAAAABAAIRAwQSITEFQVFhcYGRBhOhscEiQlKS0fAyYoLhFDNyovEHIxUkQ3OywtL/xAAZAQEBAAMBAAAAAAAAAAAAAAAAAQIDBAX/xAAoEQEAAgIBAwIGAwEAAAAAAAAAAQIDESEEEjEiQQUTMlFxgSMzYfD/2gAMAwEAAhEDEQA/AN1j0mWPJiZmRvW+jpvEXspM8Dl0XgubjJyOtETCw2unY0Lex0QcwT0WllQHIrimVDAhaKFtc0EA7s94KsWNOwDlppV9RXL/APGz8IWizaXvPDdR+g/dXcSkcOnBVysFmtQImZC1tdKjPZkqSglXKA1EMqSgKVaCVJRBypKGVJRRFy8HSXa6z0XXJNQ67kEN4umDyXH9rO1pq1XWek67SYbpI99wzJ/KDq1xPDwatCHSNYvDiMHD1XPlz9s6h1Yen7o3L6rYO0dCrAv3XQDDsM9+S9ZrpxBwXyOg6IO6emBH3vXYaD0sKd1rj7DyBJ9xx9CfvNasfV7nVmeXpO2N1dbKkoZUldrhEqlVKqUBKShlVKoKVCUBchLk0mxlyEuQFyElXSDvIS5AXISVQZcglDKqUBEoS5Kq1w0SSsNa3HVgibbqtYDMrFXts5YLC+qTiUtz1U2casqLMXKIjxzVvDgfBADJKU0Q7A8FTKy0R/jc0B0Z4hRtSMUkuHVSYKsI2Nqz4ow+MdywMfitHeCE8DfZba5sQd0LorFpRrhMwZiCei469jKI1CPBZbR9CZXBTby4exaVcw7Rhgdi92w6Za6BjjOHBF29p1QDMwq75q5ztO8nuqjXw0PuvOy/dg9RHFwS6VvDZaX4jyORXHnzWpbUO/psFMlNz5dR3gUFQbVytXT4ZmVdDtGw6wtMdVd0T0NHVhyC0VrjHPPutLugJ9F5VDSIdkVpqVA9pY7FrgWkSRIIg4jELbXrI94aL9DMeJfDKlWKhc7GSSTxOK9+hbGhuJBiCDuOBHQ+C6m2/wCn1B+NKq+mdjoqN9HeJXOW7/Tq2NksdSqNx9kPcHHgHNAHzLVbtye7op6PYqppBjREzs5/YK1/xoNOBy4gyFw2kLJVov7uq1zHD3XAg4axtGWIXqaMqm7dJxJAjYJ171jbDERtsjL3TqYfa9C6QFSm0zJAh24jNelK4PsZa/8AmC3UWAkfmyn+0Luby7untNqRMvK6mkUyTEDlVKAuVSt7nGXKpQEqryqCJVSgvIS5UGXIS5AXKiUBEoSUDnxiVjrWzUOqDaXLFbLTqBWOtaCcys5eibNfVSXOQlyW4qsRuclVKsIH14WV9RTa6aO+UWQvUUHmzBGaY2M+SW5wOIPio6QMVqbYG05J4AWUAxrnzWiiBr8UlYPcQRG5JbhgVHwqJkiCEhJOYAnucL3osZkxgcDHJMkzkcs0kNqNwkasE+g8thwz/ZYmvnBMp1IV5R6VkfevU34hwIIXh2p8uFnqSKjDDHtwJacQd4IzG3gvToVSHBedprR7nvqV2TfpuYQNrLntD1/StGekXiPu6+kyfLtP293laX0Va2xBFS8YbkJ8UvRGiZqXLU6rQnBr2XXNvagXHKeC9+jbu8Yx5xuYka41kbxA6L0H1Guab3tNIkO97gRr44rhrmmvEw9a+KLxxaQM7JEfyre8HZUph3iHNRWiz22zAuPd1WNEksdddGs3XwOhKbo3SIJ7u8C4DbiRtjML0LY53dVAdbHeLTku75eLJXcQ8v52fFbtmXl6D7XMq4A478CuqstvaYBMTlsPNfnR9odRquukiHEYcSu87JdsGH/ZtLsDg12/UMFzXwTXmvh106it+LcS+hdqrMyvTFB7Qb2I5CJY4/hfiCF8YNJ1IuGM03OaZBbJBiYOIynFfRKmlqbHvpEudTOLTibh1w6cCJ2RjrXPacszXzVLy6YkwJEAASOAGK10yanU+7bbFxw1f6b2y/a3g591hyc36r6peXybsZZe5ttN4Psulh5jDxDV9VLl6OCYmOHldVExfkZchLkBKqVvcwy5DeQyhlVByqJQSqJQEShLkJKzuDr04IFW60T7I5rE56OtRKQ5hVYyouQFyjggeURT3wkOqlVXBjBZ7pUllAnuSXlRwKS+Ugld5RLJUWTFkccUbah2lJJxVgrnbjA5aKT9uOBjjq5LHKa0qzBEtBd96lV5LByRAJBMmhydrySqbdkeK1sp7WjqURTWj4StdnpjD2VVKkDjEcyt9mpbh5oq7IwXvwpGkbV3NQuDC4OaC4CJjK8JIGHqvSpU8c0nSthdUaHUyBUYbzZyO1h3EYLDLWZrx7NuG0RbnxPDidJvdQJqik6mx7vZBiJiSMMtw3blWjNOR7LoIO7AbgukruZUY6iWF7P+pTH82j+ZoOLmg5RiPBcWym2hUc2Q4NJuvLS3Dg4SHaiIwMrjyY6zXuejhzWi3bPs923RUa2GtDhF0xBG8GJB4K36er0mXKo7xoIN7J0SDzyXmU3h7TULoaMyfxPOxuxajTlgcWgNd7OJxk4NnjMc1ora2P3dOTHXJHMOH0nRBqve38LnGMMQDJE70Fio3cRi4xBGrPLpnvXpaRsTmPvNJxiQAcd4Ebk7RjC5wvXQ0Z4YzJwyw1LsnJ6duCuL1aenZrS2mG0nbDPPGOkLVRqhwGyYPLcuf0rUmsCJz65L1dEmWweHPXHiuW9OO520tzp01kpg3SHCcCDqOvA7PLeF2tmqy0E5r5hZ61SkSGkHM3cw6DmB8WfHjn0+h9PgsxEHYT5HIj6qYMs4bc+Jaupw/NjjzDrZVSvFb2joyGuddnKYxOzOZXqteCJBkHIjI8161bxbmJePak18jJVShlUSs2IiUJKolCSiLJQkqiUBKoXWhZXxsWios7wiFODdiRUu7E5zUmqxBnfGxJdCe9qQ8IFVIWd8Jz0l6AMFSolRVHnAq0RGRkdU240+83q4+i1aZlsbOzqE0NI2ciEbWwMKlP8Au/8AlFSZjg+meoPQhBQJ+4+qOmNs/fNNptnNzD0+i0MDZgRyhULpgA5u4DDxW6mw7/TyRU6fEdFspU956/uosBoNgx6rZTp/cqqbd58fqnsG8+KKNjE1qWDxRByo8zTWhG1iKjCGVRk6DDhsdBB5g9RgubtvZE9299SoHPAloaIaAMYAO6Qu5leD2ut3dUC7WfZHHP0Wu9Y1ttpedxD57o6pee1j/wADfd2keS97TVcd21pIDZvEf0/hHUjolv0Kf4UVmAd6MYj8WqBHvGJ3kxsXGW63PebzjgBgNW4dSuOcE2tEvRr1NYpMN9rtZd7QEkZTs2xORw6qUjV94jcI2ryadoJIxE444YDCSN66C2VCxgHeOkwCJxBIBJB3ArK1e3UQwx27t2mWeuxwIDjicmjONsahmtGjXFlUjaDHEE5Lz21Llx52yecTPJbbJVisQTrcBzE+ixmOG2k+p7dsAm7ODg1zXfC4AZeHlrTLBaAajmkAQAZ3nA+a8upVLmhk+1i0H8zcW+E/KFmp20E3wcRLTvGryWj5e6t03jbfpAyXseDhnywvD7y2r1Ow2kTTrU6LibtZtRv66ZvMd8oe35di8O1WwFwdlIBB4G6R/wCKZom0XbZZtgfcjYX3wT/fHJbsVrVhzZqVtO/+8vrV5UXJFF2EbEV5d9L91Yt93mZKdlpr9hlyElCXKi5ZtayUBKhKAlUR5SnFE4pbjvRAOSKjU88Up43+aozuppL2LU5u/wAHJT6e89D9UGR7N4SH0/uVsdTO/wCV31SXiNvyn6ojGWqJxA2nofqqQeWynOMEnZeA9FspU3RhTPKp+0Jfc5fyz+h3mIT6VmGynxDXjxJWDIymHDNlSdl4H0T2tfmW1erfVBSsoyAZBz9p31WhtEbW9Z9UEaz/ALg5t8wUTaOP4Hn9Q8cUxtL8zBy/dNbR/Mw/p9ZRTKNAfDHMfVaKbBqb/dHqUunTIzu8hHqnj7wRVxuPzFG379ooG8uiIFQMHPqUYKSHK7yobeXMdvGTSpuzDagcRtF131XRXl4XaId6+lZ9TnXn/wBLZkc4Kwv4Z08tVnbHs6mOkfMS0/LAXzHtrQYyo4M96oTGyGyR8zz0X1G2OuU3P1gOceOYHkF8g06XFwJMnEzvdBnzWE+YhnXxMsVkAvAap8vsJtstZe+QcNXNZqZxdHuj9yUFI4zs+wr287ZRbjT07ZaRdDdkTzOPkOqlO0yL4zEA+IaekDlvXnOfLccyZ5AIKFSJjgd6x7OGz5vqdE6sS1jwYOHzApAIFQxgHTynUfvUs1nf7JGqZHTHyTa1VpO8jB35t/HzWrt1w6O7cbRziBBMXXOHzQfRbbFWIq0nXh7L2HAgkFrhiBrwwKy1m32yMyIP9QyQ6HZfewbXDqM+GrqntthP1a+77VQrA4jEESDq5dU68vE0TUMj8wJ5xJPOZXrXll0c/wAevs09dXWX8mFyouSiVUrqcZhchJQEqiqLLvvBAXb1CUB4JtFufvS3O3jqiJ3eSEncmwpx/MPH6pZ/q8D9U8ncgcfyps0zP4n5Uh5/M75VtM/D5fVLJfqB++au00xFo2vUWouqfYKibNMrLCJxaRwDR6p7dGt29ST6rN/CtJkVx/bj0KfTsTPjLv1YdAsV0d/BN2t6AI6dDezpPqlss1MberyPFObTaMmj5UUxtADOOiYKTTqCEFEDvRdGsaBkAEUpMq5QOvK7yTKl5A68peSbyl7egfeXmWsXbRSqai11M8c2/wDt0Wyd6xaZH+052tgvji32h5BY28MqzyfpFl5sHLWNokTMbpXyjtD/ADY+CG/KIHovrNod7LuB8l8k7TtuvdtJxO8jH1KwtHqhnWfTLBYAO7qE6w6OAb+6xTDU4PusA2gjlMn6LO8zA5KxHMrM8QonDgmUBI5jzS3DF0feKlnOP3tWU+GETy9Sx4QN3gcQfPosziRgdRS7PWi6dmB6yFtrUr2IGJBw3j9vJavE8umJ7q8DpkjXniOIxC9vspQa6s4xhAI3Xs/ELwLE68ABqP34x1XX9iWZjb5E4LTm4rLowR3XiXW2IQ4A7T1gz9716hKwtEObz8itErLo/o/bT8Q/sj8GzvVEpZO9Ve3rrcBl5VKXe3qpQMlDKC8qvICJO1CSdqqeKolBZDvi8EtzXfGrJVSNqACx3xHqEBpHW5/Ipro2ocNvimzRJoj46nUqJtzj1UTZosUGDU0cAB5JjGN2BUHoryijBCK8lSrvIGFyu8lX1d9AwOUvb0u8peQMlXfSb6neb1Q6+pfSe8KneIHX0u0NvNLfiwPA5+CHvFQfvKhsVqd7Dv6T1IgL5j2nbIdUJkm0OGGX4DhwyK+kWom6YzjA7N64DtrQ7sMaMjUcY3sbdb1aWdFjMcsonhy9U4wNUNHqhYceDgfvorYNe8eAJ9EAy44/fiqu1NGfD1VUziER81TGyQAqhjG/jH3sXoWF7rsj8TYcOLY/x1WOlUAe7Y4Edcj1AXoaN9ppgYtzHH6nDmtWTw6MXkq81lQVW/gfjHwn3m8vKF2HZ11xwPu7dRByP3tK4m0Nu+zqMuadusHoSuv7F1DdAMkajx1cFpz19G3T0tv5NO1c/wBpvPyKbfCyuIlo4+SZPFZdJ9H7aviH9sfg6+qvpUqYrqcBt/gqvJSrkgdfVSlcyqJ3oHEoZS5UkopkquiXeUlQGqcAUF5QuQCaYUUlRBd9S+EmVaB15S9vSeaiB18KXklSUDrwVyEi+peVRolS+FmKgLtxQ2031LyzB25QlBpvjcqNQbEgFXKBveBcr270a6rTbVp491eLm6y0xLhvF3LZOxdNIXmdobcKNEuafbd7LOJ18hj0QfMyYaBtBnnw3ALOM02o1wM4IDJ93moy2ohMZAxmTq2DfOtKBOxWX7kNrc3XuWqw20NdiMSCHEH8Q3jbvWO6T/lHToqTETGpZRaYncPf0NZP4m0U2kBzGzUedRbqB4mMN5XSaDFypVaRlUqZahfMeELj9F2p1F4ew4jVqI1grqLFbx/FPc38FQU38CWNnyWjNX+PUOrpb6y7n3de996CBEYmemXNAap2dFd8XSQIlIDvuVj0c+mYZfEY9cT/AIb3x/yFO+3eKXeKq9uXW883vt6l9KncqvIG3ipJSr6q/uKBpepfSu84qXwgZf3Kd4N6WqJ3eKBgfvUvJV/d4KSgZJUS5UUVd4KSs95S8VUaVazhyuN6B0qJUqXkDcFEolCXoHypfCRfVoHXlRKTKneIhpKl9Lv71feKgolcb2xtM1W09TW+LjJ8A1dfeG1cB2ifetNQ7wOjQ0+IKiw88IUakFRmGAoaY2I4UhAFwK2hMuhXdGzyUAs+9a9jQDwKk7fMf5C8gkrbo+pDhxH0WGSN1luw21eJfRQ/2UHNZ6L5YOSK8tXSRqJbviE+qsf4dPBXfSJ3Ib42rree03wpf4LN3iq8FNG2qdyiyEcVLxGvqg0mpxVXwkCvtCnfNRT5Cq+k94Nql/ggd3hVGpuSS4Ib29DZ3fBUk39yiGxwrAVqIIpdUURECpxUUQU1xTVFEkA8JbSooqg4VwooihIVFqtREQMC+fWrFxccySTxJxUUUZVJu4SrCiijMUKXVFEVTsFaiiggam0xkeHmrUUlYd1Zf5YROYFFFr6b6f23db9cfhTQiLQoouhxkvMZKr5UUVRQedqIVCoogMBVCpRRVqQoooISo0yqUQFCiiiK/9k="}alt="red head"/>
        </div>
        <div className="cardBody">
            <p className="personalBio">My name is Sydne Hanks I am learning software development, both front end and back end development</p>
        </div>
      </Card> 

      <Card style={{marginBottom: '20px', padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>   

      <Card style={{marginBottom: '20px', padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">

          {
            posts.map(post => {
              return (
                 <NavLink key={post.id}to={'/post/${post.id}'}>
                   <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                 </div>
                 </NavLink>
                
              );
            })
          }
          

        </div>
      </Card>
    </div>
    
    
   )

 }

export default Sidebar