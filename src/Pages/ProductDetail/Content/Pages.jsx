import {useState} from "react";
import { Button, InputV2 } from "../../../Components";
import { useDate } from "../../../hooks";
import { generateStart } from "../../../utils";

const Pages = ({ page, data }) => {
  const getDate = useDate();
  const [selectId, setSelectId] = useState(null);



  const commentData = data?.comments?.nodes || [];
  return (
    <div>
      <div className="">
        {page === "description" && (
          <div className="">
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />
          </div>
        )}
        {page === "additional" && (
          <div className="">
            <table className="border border-collapse w-full">
              <tbody>
                <tr>
                  <th className="p-2 text-start text-black border">
                    {"Brand"}
                  </th>
                  <td className="p-2">
                    <span className="klb-vehicle-data">
                      <ul>
                        <li
                          dangerouslySetInnerHTML={{
                            __html: "AD Auto Parts",
                          }}
                        />
                      </ul>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {page === "reviews" && (
          <div className="">
            <div>
              {commentData?.map((comment, index) => {
                // console.log(comment)

                return (
                  <div key={comment.id}>
                    <Comment
                      comment={comment}
                      getDate={getDate}
                      children={comment?.replies?.nodes || []}
                      onReply={(id) => setSelectId(id)}
                      showReply={(id) => selectId === id}
                      onCancel={() => setSelectId(null)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="">{!selectId && <CommentForm />}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const StarRating = (number) =>
  [...new Array(number).keys()].map((star) => (
    <button
      key={star}
      className={`fa-regular fa-star text-[#646a7c] text-base `}
    />
  ));

function CommentForm({ nameUser, onCancel = () => {} }) {
  return (
    <div className="mt-4 mb-10">
      {!nameUser ? (
        <h3 className="pb-[15px] mb-[30px] text-[18px]  font-poppins text-[#333333] font-semibold border-b ">
          Add Review
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
        Your email address will not be published. Required fields are marked{" "}
        <span className="text-main-color">*</span>
      </p>

      <div className="">
        <p className="mb-2">
          Your rating <span className="text-main-color">*</span>
        </p>
        <ul className="flex flex-wrap  gap-[10px] md:gap-0  mb-4">
          <li className= " cursor-pointer w-full md:w-1/12 flex md:justify-center">{StarRating(1)}</li>
          <li className= " cursor-pointer w-full flex md:w-2/12 md:justify-center md:border-x border-[#e1e1e1] md:px-4">
            {StarRating(2)}
          </li>
          <li className= " cursor-pointer w-full flex md:w-2/12 md:justify-center  md:border-x border-[#e1e1e1] md:px-4">
            {StarRating(3)}
          </li>
          <li className= " cursor-pointer w-full flex md:w-3/12 md:justify-center flex-shrink-0 md:border-x border-[#e1e1e1] md:px-4">
            {StarRating(4)}
          </li>
          <li className= " cursor-pointer w-full flex md:w-3/12 md:justify-center">{StarRating(5)}</li>
        </ul>
      </div>
      <div>
        <p className="mb-2">
          Your Review <span className="text-main-color">*</span>
        </p>
      </div>
      <form action="" className="">
        <textarea
          cols={45}
          rows={8}
          maxLength={65525}
          placeholder="Review"
          required={true}
          className="px-[15px] py-[10px] w-full border border-solid outline-none"
        ></textarea>
        <div className="">
          <span className="mb-2 block">
            Email <span className="text-main-color">*</span>
          </span>
          <InputV2 className={"border-[#eaeaea] "} placeholder="Name * " />
        </div>
        <div className="">
          <span className="mb-2 block">
            Name <span className="text-main-color">*</span>
          </span>
          <InputV2 className={"border-[#eaeaea] "} placeholder="Email * " />
        </div>

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

        <Button label={"SUBMIT"} />
      </form>
    </div>
  );
}

function Comment({ comment, getDate, children, showReply, onReply, onCancel }) {
  const authorName = comment?.author?.node?.name;

  const stars = generateStart(comment?.rating);

  const avatar = comment?.author?.node?.avatar?.url;

  return (
    <div>
      <div className="mb-10">
        <div className="flex ">
          <div className="min-w-[60px] min-h-[60px] h-[60px]">
            <img src={avatar} alt="" className="w-full h-full rounded-full" />
          </div>

          <div className="ml-[30px]">
            <div className="">
              <div className="">{stars}</div>
              <div className="">
                <strong>{authorName}</strong>
                <span className="mx-1">-</span>
                <span>{getDate()}</span>
              </div>
            </div>
            <div
              className="mb-3"
              dangerouslySetInnerHTML={{ __html: comment?.content }}
            ></div>
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
        <CommentForm nameUser={authorName} onCancel={onCancel} />
      )}

      {children.map((commentChil) => {
        return (
          <div key={commentChil?.id} className="md:pl-[60px]">
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

export default Pages;
