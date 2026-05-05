# Assignment-1: Blog Post API development with GET & POST endpoints.

Assignment-1 of Pocket School Profession Back-End software development program. Where the task was to create / develop a blog post API with only POST & GET methods / endpoints.

## Installation

Initeat a new **NODE** project and Install require librares.

```bash
  npm Init
  npm i express joi
  npm start
  ```


## API Reference

### Post New Blog

```http
  POST /blogs
```
| Data | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Minimun **3** characters |
| `content` | `string` | **Required**. Minimun **10** characters |
| `author` | `string` | **Required** |


#### Screenshots
- POST REQ

![fad Screenshot](https://i.ibb.co/gZwBwds3/SUCCESSFULL-POST-REQ-RESULT.png)