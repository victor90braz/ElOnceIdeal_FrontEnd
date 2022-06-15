import styled from "styled-components";

const DetailPlayerStyle = styled.ul`
  ul {
    padding: 0;
    list-style-type: none;
  }
  .container-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(40px);

    .card {
      position: relative;
      width: 400px;
      height: 200px;
      background: white;
      border-radius: 20px 20px 0 0;
      box-shadow: 0 35px 80px rgba(1, 2, 3, 35);
      transition: 0.5s;
      overflow: hidden;

      .image-box {
        position: absolute;
        left: 50%;
        top: -30px;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        background: blue;
        border-radius: 20px;
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
        overflow: hidden;
        transition: 0.5s;

        img {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .content {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;

        .details {
          padding: 30px;
          text-align: center;
          width: 100%;
          transition: 0.5s;
          transform: translateY(345px);
          background: black;
          opacity: 0.8;
          border-radius: 0 0;

          h2 {
            font-size: 1.25em;
            font-weight: 800;
            color: #fff;
            line-height: 1.2em;
            margin-top: 0;
            padding: 10px;

            span {
              font-size: 0.75em;
              font-weight: 500;
            }
          }

          .data {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 20px;
            color: white;
            h3 {
              font-size: 1em;
              line-height: 1.2em;
              font-weight: 600;
              span {
                font-size: 0.85em;
                font-weight: 400;
              }
            }
          }
        }

        .container-image {
          width: 50px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            border-radius: 30%;
            object-fit: cover;
          }
        }
      }
    }

    .card {
      height: 450px;
    }

    .card:hover .image-box {
      width: 250px;
      height: 250px;
    }

    .card:hover .content .details {
      transform: translateY(0px);
    }
  }
`;

export default DetailPlayerStyle;
