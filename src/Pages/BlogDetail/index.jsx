import React from "react";
import {
  BlogCard,
  Button,
  Col,
  Container,
  InputV2,
  Row,
} from "../../Components";
import { useDate } from "../../hooks";
import Sidebar from "../Blog/Sidebar";

const commentsData = [
  {
    id: 1,
    name: "John Doe",
    email: "upchh@example.com",
    comment:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pawas born and I will give you a complete account",
    createdAt: "2021-01-01T00:00:0",
    parentId: null,
    avatar:
      "https://secure.gravatar.com/avatar/3384f98a21c5dce2051e8f5a20928b05?s=96&d=mm&r=g",
  },
  {
    id: 2,
    name: "John Doe",
    email: "upchh@example.com",
    comment:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pawas born and I will give you a complete account",
    createdAt: "2021-01-01T00:00:0",
    parentId: 1,
    avatar:
      "https://secure.gravatar.com/avatar/b52928c6250a2d3a96c0156f6ea26461?s=96&d=mm&r=g",
  },
  {
    id: 3,
    name: "John Doe",
    email: "upchh@example.com",
    comment:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pawas born and I will give you a complete account",
    createdAt: "2021-01-01T00:00:0",
    parentId: null,
    avatar:
      "https://secure.gravatar.com/avatar/b52928c6250a2d3a96c0156f6ea26461?s=96&d=mm&r=g",
  },
];

const BlogDetail = () => {
  const getDate = useDate();

  const [comments, setComments] = React.useState(commentsData);

  const [selectId, setSelectId] = React.useState(null);

  const getChildComments = (parentId) => {
    return comments.filter((comment) => comment.parentId === parentId);
  };

  const rootComments = comments.filter((comment) => !comment.parentId);

  return (
    <div className="py-20">
      <Container>
        <Row>
          <Col className={"w-full lg:w-4/12 order-2 mt-10 md:mt-0  md:order-1"}>
            <div className="">
              <div className="relative mb-[30px]">
                <input
                  type="text"
                  className=" h-[80px] border-[1px] pl-5  w-full pr-[84px]  outline-none "
                  placeholder="Search..."
                  // onChange={handleOnSearch}
                />
                <button className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-20 bg-main-color  text-white">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <Sidebar />
            </div>
          </Col>
          <Col className={"w-full lg:w-8/12 order-1 md:order-2"}>
            <BlogCard
              hiddenButton={true}
              hiddenBlockquote={false}
              hiddenDescription={false}
            />
            <div className="mt-[50px]">
              <h4 className="mb-[30px] text-2xl text-dark-color font-semibold font-poppins">
                3 thoughts on “The Problem With Typefaces on the Web”{" "}
              </h4>

              {/* comment componet */}

              <div className="">
                {rootComments.map((comment) => {
                  return (
                    <div key={comment.id}>
                      <Comment
                        comment={comment}
                        getDate={getDate}
                        children={getChildComments(comment.id)}
                        onReply={(id) => setSelectId(id)}
                        showReply={(id) => selectId === id}
                        onCancel={() => setSelectId(null)}
                      />
                    </div>
                  );
                })}
              </div>

              {selectId === null && <CommentForm />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogDetail;

function CommentForm({ nameUser, onCancel = () => {} }) {
  return (
    <div className="mt-4 mb-10">
      {!nameUser ? (
        <h3 className="mb-[5px] text-[24px]  font-poppins text-dark-color font-semibold">
          Leave a Reply
        </h3>
      ) : (
        <div className="flex items-center font-poppins text-dark-color">
          <h3 className="mb-[5px] text-[24px]    font-semibold">
            Reply to {nameUser}
          </h3>
          <button onClick={() => onCancel()} className="text-[19px] ml-[5px] ">
            Cancel Reply
          </button>
        </div>
      )}
      <p className="mb-4">
        Your email address will not be published. Required fields are marked *
      </p>
      <form action="" className="">
        <textarea
          cols={45}
          rows={8}
          maxLength={65525}
          placeholder="Comment"
          required={true}
          className="px-[15px] py-[10px] w-full border border-solid outline-none"
        ></textarea>
        <InputV2 className={"border-[#eaeaea] "} placeholder="Name * " />
        <InputV2 className={"border-[#eaeaea] "} placeholder="Email * " />
        <InputV2 className={"border-[#eaeaea] "} placeholder="Website " />

        <div className="mb-4 ">
          <input
            type="checkbox"
            name=""
            id=""
            className="mr-2 w-4 h-4 translate-y-1 "
          />
          Save my name, email, and website in this browser for the next time I
          comment.
        </div>

        <Button label={"POST COMMENT"} />
      </form>
    </div>
  );
}

function Comment({ comment, getDate, children, showReply, onReply, onCancel }) {
  return (
    <div>
      <div className="mb-10">
        <div className="flex ">
          <div className="min-w-[90px] min-h-[90px] h-[90px]">
            <img
              src={comment.avatar}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="ml-[30px]">
            <div className="">
              <span className=" text-[18px]  font-medium text-dark-color">
                {comment.name}
              </span>
              <span className="ml-3">{getDate()}</span>
            </div>
            <div className="mb-[15px]">
              <p className="">{comment.comment}</p>
            </div>
            <button
              onClick={() => onReply(comment.id)}
              className=" font-medium transition hover:text-main-color"
            >
              Reply
              <i className="fa-solid fa-arrow-right-long ml-[10px]"></i>
            </button>
          </div>
        </div>
      </div>

      {showReply(comment.id) && (
        <CommentForm nameUser={comment.name} onCancel={onCancel} />
      )}

      {children.map((commentChil) => {
        return (
          <div key={comment.id} className="md:pl-[60px]">
            <Comment
              comment={commentChil}
              getDate={getDate}
              children={[]}
              onCancel={onCancel}
              onReply={() => onReply(commentChil.id)}
              showReply={showReply}
            />
          </div>
        );
      })}
    </div>
  );
}
