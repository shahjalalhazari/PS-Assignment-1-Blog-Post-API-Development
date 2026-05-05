# Assignment-1: Blog Post API development with GET & POST endpoints.

Assignment-1 of Pocket School Profession Back-End software development program. Where the task was to create / develop a blog post API with only POST & GET methods / endpoints.

## Installation

Initeat a new **NODE** project and Install require librares.

```bash
  npm Init
  npm i express joi
  ```

** Run Server **
```bash
  npm start
  ```


## API Reference

### POST New Blog

```http
  POST /blogs
```
| Data | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Minimun **3** characters |
| `content` | `string` | **Required**. Minimun **10** characters |
| `author` | `string` | **Required** |

** Make sure to fullfil all the requirments data mentioned above. **

#### Screenshots
- POST REQ

![fad Screenshot](https://i.ibb.co/gZwBwds3/SUCCESSFULL-POST-REQ-RESULT.png)


### GET a single Blog

```http
  GET /blog/${id}
```

### GET all Blog

```http
  GET /blogs
```

#### Screenshots
- GET REQ FOR SINGLE BLOG & ALL BLOGS

![fad Screenshot](https://i.ibb.co/Lhk51kjg/SUCCESSFULL-POST-REQ-RESULT.png)


## Thank You