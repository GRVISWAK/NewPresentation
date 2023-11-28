
 import React, { useState } from "react";
import NavBar1 from "./NavBar1";
import "./Home.css";
import { Typography } from "@mui/material";
import Searchbar from "./SearchBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import cat from "./cat.jpg";
import parrot1 from "./parrot1.webp";
const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedList, setSelectedList] = useState(null);

  const handleClick = (event, list) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setSelectedList(list);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const renderDropdownContent = () => {
    switch (selectedList) {
      case "ADOPT_OR_GET_INVOLVED":
        return (
          <p>
            <a href="//" style={{ color: "white" }}>
              About Petshelter
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Adopting Pets
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Animal Shelters & Rescues
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Petfinder Foundation
            </a>
          </p>
        );
      case "DOG_AND_PUPPIES":
        return (
          <p>
            <a href="//" style={{ color: "white" }}>
              Dog Adoption
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Dog Breeds
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Feeding Your Dog
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Dog Behavior
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Dog Health & Wellness
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Dog Training
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Other Dog Information
            </a>
          </p>
        );
      case "CATS_AND_KITTENS":
        return (
          <p>
            <a href="//" style={{ color: "white" }}>
              Cat Adoption
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Cat Breeds
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Feeding Your Cat
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Cat Behavior
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Cat Health & Wellness
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Cat Training
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Other Cat Information
            </a>
          </p>
        );
      case "OTHER_PETS":
        return (
          <p>
            <a href="//" style={{ color: "white" }}>
              Birds
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Exotic Pets
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Guinea Pigs
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Horses
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Rabbits
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Reptiles
            </a>
            <br />
            <a href="//" style={{ color: "white" }}>
              Small & Furry Pets
            </a>
            <br />
          </p>
        );
      default:
        return null;
   
    }
  };

  return (
    <div>
      <NavBar1></NavBar1>
      <div className="postnavbar">
      <div className="dropdown-wrapper">
          <button
            aria-describedby={id}
            type="button"
            onClick={(e) => handleClick(e, "ADOPT_OR_GET_INVOLVED")}
          >
            ADOPT OR GET INVOLVED
          </button>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
              {renderDropdownContent()}
            </Box>
          </Popper>
        </div>
        <div className="dropdown-wrapper">
          <button
            aria-describedby={id}
            type="button"
            onClick={(e) => handleClick(e, "DOG_AND_PUPPIES")}
          >
            DOG AND PUPPIES
          </button>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
              {renderDropdownContent()}
            </Box>
          </Popper>
        </div>
        <div className="dropdown-wrapper">
          <button
            aria-describedby={id}
            type="button"
            onClick={(e) => handleClick(e, "CATS_AND_KITTENS")}
          >
            CATS AND KITTENS
          </button>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
              {renderDropdownContent()}
            </Box>
          </Popper>
        </div>
        <div className="dropdown-wrapper">
          <button
            aria-describedby={id}
            type="button"
            onClick={(e) => handleClick(e, "OTHER_PETS")}
          >
            OTHER PETS
          </button>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
              {renderDropdownContent()}
            </Box>
          </Popper>
        </div>
      </div>
      <div className="proj">
        <div className="mycont">
          <Searchbar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography
            variant="h4"
            textAlign={"center"}
            fontFamily={"Oswald"}
            color={"white"}
          >
            Find Your New Best Friend!
            <br />
            Browse pets from our network of over 11,500 shelters and rescues.
            </Typography>
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "50px" }}>
            <Box sx={{ border: 0, p: 0.1 }}>
            <img src={"https://www.rover.com/blog/wp-content/uploads/2021/06/theo.theexplorer-1024x1024.jpg"} alt="Cat Logo" style={{ width: "300px", height: "300px" }} />
           
            </Box>
           
            <Box sx={{ border: 0, p: 0.1 }}>
              <img src={cat} alt="Dog Logo" style={{ width: "300px", height: "300px" }} />
            </Box>
            <Box sx={{ border: 0, p: 0.1 }}>
              <img src={parrot1} alt="Bird Logo" style={{ width: "300px", height: "300px" }} />
            </Box>
          </div>
        </div>
      </div>
      <div className="preoverview">
        <h1>Pets Available For Adoption Nearby</h1>
      </div>
      <div className="overview">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHXIlHL4foiuXTywY2TNPWZ4FhJxXgxDgsw&usqp=CAU"
              alt="German Shepard"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              German Shepard
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The German Shepherd, also known in Britain as an Alsatian, is a German breed of working dog of medium to large size.
             
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="data:image/jpeg;base64,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"
              alt="Doberman"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Doberman
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The Dobermann is a German breed of medium-large domestic dog of pinscher type.
              It was originally bred in Thuringia in about 1890 .
           
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="data:image/jpeg;base64,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"
              alt="Shih Tzu"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Shih Tzu
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The Shih Tzu is a small, loyal, and playful dog breed with a 
              long, luxurious coat, and an affectionate personality
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
        
      </div>
      <div className="overview">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="data:image/jpeg;base64,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"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Percian cat
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The Persian cat, also known as the Persian longhair,
               is a long-haired breed of cat characterised by a round face and short muzzle.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8QEBAPDw8PEA8QDxAPEA8QFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uGB8zOjMvNyguLysBCgoKDg0OGRAQGi0lHyUtLS0tLS8tKy0uLS0tLS0tKy0tLy0tLS0tLSstLS0tLS0rLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EADwQAAICAQMCBQIEAwYEBwAAAAECABEDBBIhBTETIkFRYQZxMkKBkSOh8DNSYrHB4QcUFZIWJDRTgqPC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EADQRAAIBAgQDBgQGAgMAAAAAAAABAgMRBCExQRJRYQUTcZGx8IGhwdEUIiMy4fEzQlKCov/aAAwDAQACEQMRAD8A9LMaKKdM54jGijGMBQTEY0YCjGIwbgAiYxjExEyQhExiYxgEwARMYmMTGuBFj3GuImDcYrjkwSYiYJMAHJkZMRMAmSsA5MEtGJgEwAImCWgloDGABboJaBcEtARLuhBpAGhBoATAwgZCGhhoDJQYQMiBhAwAlBhgyEGGDEBMDCBkQMMGICQR7gAwogNONFGkCwUExRoAMY0URjAYwSYjGMkIRMEmIwTABEwCYo0CIxiJiMYxiETBiMEwARMAmOYBkkAiYJMRgkwAYmAxiJgMYAJmkRMdjImMBDloNwC0YtARIGhhpXDQg0BFgNDDSANDDQJE6mGDIAYYMAJgYYMhBhgwGTgwgZCDJAYgJQY9yO4VxAaxjR4xlZYDGjmCYwFBMcwTGhDGMY5gmMBjGMcwBAQxjRRoCEYBhmCYwyAJjGIxjABjBMcwQCeByZJiBaAZMcQ9WA+O5EqanOoyY8KbsmTKTSqPwoK3ZGPoosfuJnli6Mb3ksjQ8LWUeJxdh2kbGXNRo3XmrHuvMpPLKVWFWPFTaa6ZmeSa1I2MiZpIxkDGWEWxiYJMYmCTAiHccNIrjhoAThpKrSqGhhoDRaDQwZWVpKjQGmTgyQGQK0NWgSJwYYMhBhgwAnBh3IAZJciBtRjHgGVlgxjGPGjAExjCgmMQxjRRjGAJEYwjBMBAmDCMYwAEwTHMYxiYBjGIwTGAxlLVdUClVxrvByImQhlUrjPfJz3A9pcPtMXqXTk0uEZWBfZQemG42PxC+/I7fM5Ha1dw7uF/3N5c9Lep1+yYU33kpaq1ny5/34l3V6tQDs7ntKP0VmOdtTq2N7m/5fGPQY8ZJJH3J/lOR659WYjiZdOGLMKBYUFvufvOj/4feXpuL5OSq7kbjOD2hxQw/i0vr62NWNxEajUY6HUa3UKOS9V7UAP3mTl1+It+OzzwCbP7cTM6nqi71V1wB7TK1gzIVbEiN6NuuqM5dBThNSi+F872+Zy3V45cCSt1Ol8RT2P6Hg/zkTTL02rXMCqtTjuh4Zf695bXIy8NyP5iekwXbrUlTxK/7fdfVeXLPVo20JSYBMLcD2gGelTUkmndMyhXBBig3GIkuGGkIMIGMZYVpIrSqpkitENFpWkitKytJA0BlkGSKZXUyVWgMnBkm6QKYdwGdBAMMwDKSwYwYUUYAmDDgmMAYMKMYxDGAYZgmAEZgw2NcngDkk9q95j63r2PDlOJgeFvjv8AoPzcc8HiVVq0KKTm7JuwKLehqmCZiab6h8Vdy4iKI3Ak2ve+K+37x8vXlVlVsZBbkHd5dv8Aev2uUrH4dv8Ad8pW87WH3cuRrGCZj6vVZHDNgJXICCuN9n8Ra9AexNMP/jOe6Nqc25FbPkyjJkCutbHxM7C2PJPADG+33k/xK4uFRfv5/IThlc7VnAIBIBN0L5NcmpjfVei1GqxpjwuqeYliwbaePKbUEj1+JidWwZdNqXyB/Ey+E74WZqt2XaSw7bgt0AKb9KO99OdRbU6dXcVkBKZKFAsPUfv+9yirRpYqpFVY/mi245/B+aeng0y2lWnRUuF6qz99DkNR/wANmZd3/N1lJLN/C/h/pzf6/wApt9GbLo8aaTUVaAjFlX8GUf6N7gzo1zozMgZSyVuUEWt9rEi1emTKpRxYP7g+hB9DFjOzKWIpcEcns+un8XId7K+ZkanFbWOVfkEe/qP5j94yYT2I9Jn9X/5jTUQ25RwGryuOSNw9GFsPkH7iVU+o8b1v/hZBx5vwN9m9P1nkq2Eq024SWa9+QNXfEjUy4BYNfY12McOfX94OLqBPdQQfWv5iTFlPaYZZDjnowUVuGHbsfUyTd+nxKz5Avdu/zV/aPp9Qr8A3XIFjcJ1ez+1KuFy1hy+q+q0fmKdO7sTxGMrenrV38RT2eHxFPEU1Upu69OjM8o2YoriiEuIkgMdWgRAwAsK0lVpVUyVTAZbVpIhlZDJ0MCSZYUw7kKmSXAkdIYEOCZSWAmNHjRgIxjEZDqM2wWQSLo+tfJ+JGdSMIuUsktQ1DMp5+p4EsNkUML8vPJHpVSLUdXCDlebo+wu6N18TMy6lc5D7FLYyF8WhfJuh82AZx8V21RjH9GSb8G153WfmXRoN6oqt9XtbeHpjmQNQZWKeVh5bsGiDwf0PrI8vVdWWZsi+DjamRXdScZA8yhlokG75HHau0tjDqc1jEqoOP4zmgwo8BQCTz9vv7U//AAvqcmT+Pmx+HVNsQE1YJVCRfPa27c8HgjHB9o4mKtdRe+V/fiNqnHUyNZ1lsxYeKm1ltgGVPE59/UgUD95WxdS1GWqTLabsYZMauERfKrUTzytEcV7ztNH9NabFkOQLupQqI1FEHJsD38x5+01argcD2HAmyn2RJp95N+vzvn8yLqrZHnuXp/UMzpkTGWARVGTOoxZaLE2ao2o9+D8zVXpvUDjIP/L43IIBDkotim8gQ3ftdc/E60yMzWuy6V7ycm/G3pYrdV7I4nF0DXYyAPCZO/lYY9pvgLuBNfHFekhydD6ouU5lOnLb2ZSGIIBJIXlaIF9jO6MAy2HZ1CEuKKafi9hd6zjtW/UqVc+k8cWpL4mRXXve0BjZvaQeO3pdy90XqKFDiZMmlyA2fEQY959WW+P09LnQmAwvg8iXRw7gvyyb8c/s/mLjXL38zmeoaTNg1J1uBBnDpsz4kO0svHnUercD7/HqS/VemIBJdbamVkIKUpJ+D2HY+s2n0WPuoKH3xkr/AJcH9Zgda6BvJfZ4xIINEYs3PF2KV/1FzPXWJpwk6a8s8+dnb4r819i+EqUrcf28/aNrPjTKhUi0cfyPYzjm6CqarHjzkjDkbaMoHFnspPoSaH6zY6PrvDrT5PEBXsMvGRV9/wDEvyO02ciKwogMD6HkGVyjRx8LJtTis8rSXiuXLzRXKEqTvt8vMz8v0VplFDLqvD7+EM21f8pn5fpXTjzYnzKwFU5GVa9qPNfYzuBiL4QW4of5TzbqH1Ooc+CSwBoHsCAaJ+RxPHOOKVSUIyeTd+X83tvqapZRTsXm6NlQCgrDteI7T/2t2/7jI8+kZK3jafQny/sT3/SU9N9XCwW4APNk/wCncTpdNrcepx3idWIFkA+nuI/1Yf5F78SiSg80jC3Z05Vr+HF3/rCw9bA8uoTYb/GoJQ/JHcfpcvZ+m43/AA3jJ7tiY4zfvxwf1E4nqWt1Wl1GTBm25lSiCyBC6HsQRx8evIM6OAr1Kcn3TXVPf6egoKMvync48quNyMrA9ipBH8oYnHdGy49S9Yi2mzDzABrDj1o8X9qnR4tTmx8Z0sf+7jBI+7L3H3nqcPiXON5xt1Wa89vjYz1Kdnk/f1+BoCEBGWiARyDyCPUQgJrKhxJFggQlEBkiyYGRLJUECSJlMluRLJYEjpoJhRjKSwCR6jMMas7XtUEmgSaHfiTGZuTouBsniMHJ9vFyMO4Pcm/Ttdd5VVdS1qaTfV2S+TbJRtuZb/VCZf8A015LqhtbcTZH4SOV5XkHiYWq6xlthl/h5F42bXV+bBYK1B644+/tO1bwNJiJXGuPGosjFjAAA9aUTG/6Q+tyeLqi4wg3iwWUYiqDNR8t8njnn0rnlYrBOvJRqS43e/DpFbXeflnd52WpZGbirrL6nGomXU5Fa2dcTebGCVxDk+V2A7nttFjjmdr0vpzZFXJnAF0fDXlWoFaax5hzNJ+m41xrixImJB6IoUdqv7/PeWlWgB7AD9pLD9lwjV/UV1FZcm3rlpZdVrrewSqu2WoNRGOYxnbKATAMMwTAQBgmGZGYxMEwDJDBIgIiMEyUyMyQEZgGSGRmAFXW6THlXbkUMByD2ZT7qw5B+0wNd1odODYlyDLmc/wy/HgqR3evW/UTp2mfqel6fISz4cbEkMSygliBQv3495jxeFVdJ5KS33tyutujLqFd0n0OY6h9bakY2XLt8+N1Q4Wqya2ub52/HB794GPoePUdNwlVrKuG1YA2WBJKkDvfM0+u/S+PP58QCZBdL2RyfgfhPyJV6N1PNpgMRxYkxIcmBWbJ5/HILHkEjatc123fpOYoLB3jOKaaeaSV313+2xpS/EO8XbM57ofQcuTJmxZF8MqqbvERty3fYehnRYPptcNPgy5EyLyGJBUn5WpuafCFBILMxou7ElmNXzfbv29IRE34fB0nSXGlJta52+BkrVJKbSurbffqZWPVuG/iLscfiT0P+JD6j47jt7GN1Xo2m1rJkcsGxAilYLvQmxfF8G/3M03xhuCAR8yk2n2nvQ/K/qh9j7icufZqwlVVY5w36ePNddsr3sUSqyirx1I9D0jT4SDjxKGH5z5n/wC48y8BFhybrsUymmX2Pv8AaSAT0NNxcU46EYzU1xJgBYVQwsfbJjBAhgQgsICAxKJKogqJMogNBKIW7+v6EYTkNb1bWjIwXVYAAaAx4HdR8bm7n57SitXhSScvp9WicYuWh6wYJhRoyYJgw4JgBTydPxtlGZgWdRS2zFF78he18yyY8aKMVHQLiMAwjEZMADGMcxRiIzAMlMAiAiMwTJSIJEAsRmCRDIjERkSMyMiTEQCIAQkQCJKRK2r1WPFRyOqWQBuNWSQP8yP3jbW4Gb1jqTYVQogJOZEfxLxgIbtlJ4J7cfM5fR/UGqTLlOYEKz2EYf2aDzOR9seM9vV1PrN/N9U6FhtZyym9xGN2UKAvJrkDzgTN1ObpxrwdQgatyhiTj72AN34TYBoXyq2poTHOpeScZrzXtkrdDodPqlyWLAdVQ5Md2cZYWFPzMbV/S+Bjvx2jh1dDyy4yDZ2pYHJ73czvp/MuDI3m/tn8TNlYEBVo7MdtybO5r9eB3utLWfUuNf7Mb+aJJ2ce4sf51IyxFCUP1bX8/wCdPncklNO8Sh0zVZ9I+TFqyX35WfG4HDBuSVPrz+X0nQYtQj7trA7QCSOwsWJyut6llycMystdtq0D7/f5mXp+pZUyZUVqVx5h6E1Rv24qYaWPVOTiruG19V05W8cy2cOJX0lv16nVZevYgrkckbgoH5qNA/F8n7ShpOulEPijcL4/wqPxWT3+PtMXMNrAgGiAQALNe3+cbMoam9CeRXF9+39esofaNWTUvfkHcx0O10TLnClCoy7bRN4YlP7rj+qlzGb9CCDTKe6n1BnLdFcI245CisACFxs7PXp24H852WJUyJvUkZAPLYI8RR+XnkN7EzZg67UeJLLdKza62Wdr6qytsmjFOhwS4ofFc/Dr66EO2JWBJAIJXhgD2PsfaQ9R1yYcRyG67AVyT2217/7zH+lepq7NjJ3PkDZgwNj8VOp4FEE/IIIozW8VxYhUo2sv3eOyXq/FF0YJ0+PnodDthBYYEMLNpAACSKI4EICIDC+os9/wly7bHnQYw9+osk8faZWDpQK3v/8Aqf8A/IqdkMCbt21dx/NQv95MiUK4/Xufmc2rgHVqOc2un7sv/XokuRdGokrI6KMYojNohoxEeNAAIxh1BjAExR4MAGMGGRBqMADERHIjERiBqCYZEYwAhIiIhkQXIAskAe5NQItERnPdX+pUxGsQD8cuSdq/179pb6l13TjG6q4diCtV7j/EKP2nAa3Usw2Yktiwt2IOMKTRFVXqPX1nKxmOs1Ck1nus7dNGveqLIQvmzU/69r9QyY8NLvY7XYKgfapJCn1HBPHtMrU4BlxjPk1ochvDXk7mYKp447AFDf29TUoNmfJkGTxmZh4uzw+BjOUHdXr2YDyj0h9I0IGdA2AsQfLjfLXG4WzUp2gADv8AH64e841aTbb5vLplqWqJAmjxswOMuao7hjagbIq6+xv7fM6LRPo8eLYmAPkG8FnWtnNUpN7q9xLGqyHcpKr5RuGIAeApHc7VPnI9NxMx9UVO8ikHcsDtHPp8Sp1uBtQd3pmvvfX4NdGOwGrZeQOxPHk2D70OAZDp1s7rbjhQQa+9yxo9JjJG/LjRSL8+RRYINbTzzfpRv5l3rGu02HT1pnV6Yh94dSxFFSvFVz39aHMjChKUXL+2DZk6vUjGP8R7Cj39yfSVzi8JtzEnc1qDYFn79/T0i1OndgmTKyqoA7A72cqGKol2eGHsPmaefpZyJg8rOzAkvQUvXlVSAa4A7X+g9bu64YtS18/5FxAPpi4whBbZEPYE/mYdhyPtI8eKlYG12kBg3DoQa8wJ47n952fSehNiGnY5CDjU7kXgEEkhSb5q/tLnV+iYdUpDghqoZF4cfHyPgy6PZk5Q1s+Tt/LXx0BVoJ5nI9Hy42yLRAKigrY/EG8MNyZFPYEcggnvO6XDSrwqgqCAl7R8CwJ5pq9DqulZhlZRmxG1L8+HlQ91f1Rvb+Vzs+g9dXOmQY2LgL4iBqLYz/cYDki/URUZPBT4p3s8mt1bNPro7v7k5JVI2XwJtTjx5MpTITtA8bgsjhlO0uriuAKseob7S8MSB2ITzgBC22rX8Q8393mUtcGzY/DxEDIWAZqDbL9DRsEHb+03dBpQVXEDbKtIzVbV6H+uJupSmm1e0VnJ5XTbbtuvyq3NWtkZnBJ3W+31+L986wWEFkhx0aIojioQWdIqIwsILDCwgsBjAQ6jgRwIAbUaHBMqLRo1R4oxA1GMKMRAAI1Q6gxgDGqFUaoADUaoVRVHcCMiDUlIgkRiK2rzrjUs5AA7WQtn2BPrOJ631p81ituMfloOWN0D9/tN/wCqNO7BTuRcai/NkCEn1vcQs816p1eyVwkAIxvLaMCKojgkHv3/AN5wu0atac+6Saj6/H31JxSLWuVcQGTOfMAWxadSu4vZUHJ6irBqvSY2ryu72/l3bPCxotE0CLROasm/mRF8hLNuAsgb8lFm7E7bHfsOPmdp9JdDGZW8jpTEZtQdtsBV4MZAo9uW9PTmzM9Gi5PhgWaGb9K9LbID4abFXhtVkcMmD3VEqmf9aF8ibjlMCtjxbSDW5zWVsjc+Z3Zbvn4A9J0fV9Pjx6cBQqJjI24xwp+No7n17+85DV6wHy9jfNGif0uSxrlRtSj4t87+i8fjsEc8yply8MSVVRySQeD73KfUPJj8R13Id1cOEysNp2eIgIFgt3rkV9tXSaEZzkbISulwDdncB7/CTtA2m+Cp+33ga/py6nVb9OuJ0YL4NDIpDAfmVm4FewW/0manh3GHeSXRLdvw5Be7sZep1DHwiF2MRjBxAvlUp/e2ZCeOALHxJTok8icrxfn8xAPYXtub2twphyDBjFKgBzOi02RjzRN3QFeW/vKC4ca50olk8RbOwc+b2Pf9Y67fecMpZrJ7K/TotATK/UNPgxNQxZCwPghwqqu4eppRVWBQA/SWcmjdxpEI52MpoFzW88gWfT4r/Sv1DVbnRGDXkfK2IDlV7Fxxxz5eeSKrgVHGbKAi70RkD5EHIITj+Ie1gNu5/wB46k4See/3z/saO80mlXEiou4qvA3Hca+8m2zy/Q/9YTIcgGXMcBbEylmybWONQVI962H7i/eXemfVOrTUhc4ZQuDHjdMx27sirw/NbSzNZ/2noIYmCVuFpaaGdxdzuNTjx5vE07qTagm1tSD2IJFEg+npx7zg9f8ATL6fJ4ujJGXG4D6eyASe3hseyt7H3Ivip2nW9cuEJlVl3B1RC+UY8OQsL2sx78WbF1M/rXUE3Y9Rjy4nxIpTUBMisVthRB/MA3HuLHHM5/ad3By3TsuUk/8AVrmtvlrZasNk7bej5+AfROvpmIXN/DyKNpVl2sG9Q19jU6LG3ZlPsQQf5gzFy9GxaxWdjszDyjKlblAAoH+8p70f0IlDFq9ToHVM67sRNeIvONj6UfyH/CZLC4mrClGpUXFCSvfVq/8Ay5q2+xZUpU6smo/lkttn4e/lmdlqsoyU22nrzEdmPvINsq9O1q5L8wO7laFADttu+T+0vbZ0MLUpzpJ09PTp9lsjJWhKM7TWYO2LbJAscCaCkYCPUILCqAGrBMUUrLRqjRRQAUUUUYhqjVFFABqjERRQAao1RRRgMRMb6g6uNOlIV8VvwgkUB6nv3jxTHjqsqdFuOug0ed9bL51ZmZEDHdkc7vKvJ4on2nPuca0qD12BQpY8/iIs8GKKedou8W/EsWx1f059ODUHGTuChBkylHB2Fha+bbxkII4HKjknkCejYNOmNFx41CIgCqqigoHoIop6XC04wjdLN/0VyedjE+qH4TGAS17rH5R2P9fE57Q9M8Zzir8SncQQ21bAJv8AXj/aKKcutTVbHcMtL28rFiyiX/qnRYdNg02xWCYi2EJjUEMMigEvzyPL88kTC6Vr8+/+AUOJ0yocoUhsOZCCUBPBBGwmu4uiNsUUtxKSrylHJqKt0yt6P2xR0sWNNhyMVarAKs53MvF9zV9yex7wW0jeKwZVtfMwVQbK+YGzYPYEfoYopyo013Snvf1uT3RIv0tnylMjNsGHOHxqzhTsCgMAVBrcygknmvSU9T9A6tk/tsbv4BxEvkc7ycpyE8rx3H6i4op6ZYWnGKXT7GdzdwMuXP0/DqsGqUO+qYZA3i3vTaEb8NV2HNj9aM5Hxl5HiHaoYheXUH2A7X88doopy8R/lcNlkWw0uH0rRNq2OEZFxnaSniHJsL96JFhSaq/0hY9NkVcmLJgUPldOci1lxbbPH5gG9eKNDmPFJQprg4lk8w1djq/pDrn/AJivEIwIjqQ5VQ3IIY89+/8ARnooGPNj/LkxZF+HR0I/YgiPFLOzJtSnT/1WaXK+vn1JVs4qT1vr75HNazombSMcukLZMQO5tPZLoPXYe7D1rv7XNbo/WMedR5hZ7XQJ+CPQxRQxC/CVYTpZcbs1t4+JqoP8TTlGpnwq6e5rVHCx4p1zmiqPUUUQH//Z"
              alt="Parrot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Parrot
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Parrots, also known as psittacines, are birds with a strong curved beak, upright stance, and clawed feet.
               
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="data:image/webp;base64,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"
              alt="Cockatiel"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Cockatiel
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The cockatiel, also known as the quarrion, is a medium-sized parrot that is a member of its own branch of the cockatoo family.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
        
        
      </div>
      <div className="bottom">
        <div className="About">
          <h3>ABOUT US</h3>
          <p>
            <h3>
              {" "}
              You need in-home pet grooming, pet training, dog walking, pet
              insurance, pet relocation, or vet on call, PetShelter connects pet
              parents with pet care heroes who'll treat their pet like family.
              <br />
              We understand your pet is family. And you can trust us to keep
              your pet happy, healthy, and sweet as ever. But it's not just
              about pet love. PetShelter is also committed to making pet care
              safe, easy, and affordable so that everyone can experience the
              unconditional love of a pet. Whatever you and your furr babies are
              into, we're into it too. And we've got your back. Anytime.
              Anywhere. ThePetNest donates a portion of every service to Pet
              NGO's & Rescue shelters through this program. We also provide
              meals to shelter dogs in India.
            </h3>
          </p>
        </div>
      
      <div className="Contact">
          <h3>CONTACT</h3>
          <p>
            <h2>Let's get you some help!</h2>
            <i>Call us at:</i>
            <br />
            1234567890
            <br />
            <i>
              {" "}
              Email us at
              <br />
            </i>
            support@theproject.com
            <br />
            <i>
              {" "}
              Postal address:
              <br />
            </i>
            BK Pudur, Sugunapuram East, Kuniyamuthur, Tamil Nadu 641008
            <br />
          </p>
          <p>
            For further details{" "}
            <a href="https://gifographics.co/wp-content/uploads/2017/01/contact-us.gif">
              Contact us
            </a>
            . We look forward to hearing from you!
          </p>
        </div>
    </div>
    </div>
    
  );
};

export default Home;