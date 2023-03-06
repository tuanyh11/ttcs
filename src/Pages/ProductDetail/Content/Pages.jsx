import { useEffect, useState } from "react";
import { Button, InputV2 } from "../../../Components";
import { useDate } from "../../../hooks";
import { generateStart } from "../../../utils";

const Pages = ({ page, data, commentId }) => {
  const getDate = useDate();
  const [selectId, setSelectId] = useState(null);

  const [selectRating, setSelectRating] = useState(0);

  useEffect(() => {
    const element = commentId ? document.getElementById(commentId) : null;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [commentId]);

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
            <h1 className=" font-poppins text-2xl mb-5 font-medium">
              {commentData?.length} review for Titanium Wheel Cover
            </h1>
            <div>
              {commentData?.map((comment, index) => {
                // console.log(comment)

                return (
                  <div id={commentId || index} key={comment.id}>
                    <Comment
                      comment={comment}
                      getDate={getDate}
                      children={comment?.replies?.nodes || []}
                      onReply={(id) => setSelectId(id)}
                      showReply={(id) => selectId === id}
                      onCancel={() => setSelectId(null)}
                      onSelectRating={setSelectRating}
                      rating={selectRating}
                    />
                  </div>
                );
              })}
            </div>
            <div className="">
              {!selectId && (
                <CommentForm
                  onSelectRating={setSelectRating}
                  rating={selectRating}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const StarRating = (number, onSelect, rating) => (
  <div role={"button"} onClick={() => onSelect(number)} className="group">
    {[...new Array(number).keys()].map((star) => (
      <button
        key={star}
        className={`fa-regular group-hover:text-[#000] group-hover:font-black fa-star  text-[15px] ${
          rating === number ? "text-[#000] font-black" : "text-[#666] "
        } `}
      />
    ))}
  </div>
);

function CommentForm({
  nameUser,
  onCancel = () => {},
  onSelectRating,
  rating = 0,
}) {
  return (
    <div className="mt-4 ">
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
        <ul className="mb-4">
          <li className=" cursor-pointer w-[2em] mr-[1em] border-r border-[#e1e1e1] inline-block">
            {StarRating(1, onSelectRating, rating)}
          </li>
          <li className=" cursor-pointer w-[3em] mr-[1em] border-r  border-[#e1e1e1] inline-block ">
            {StarRating(2, onSelectRating, rating)}
          </li>
          <li className=" cursor-pointer  w-[4em] border-r  mr-[1em] border-[#e1e1e1] inline-block ">
            {StarRating(3, onSelectRating, rating)}
          </li>
          <li className=" cursor-pointer w-[5em] border-r  mr-[1em] border-[#e1e1e1] inline-block ">
            {StarRating(4, onSelectRating, rating)}
          </li>
          <li className=" cursor-pointer w-[6em] mr-[1em] inline-block">
            {StarRating(5, onSelectRating, rating)}
          </li>
        </ul>
      </div>
      <div>
        <p className="mb-2">
          Your Review <span className="text-main-color">*</span>
        </p>
      </div>
      <form action="" className="" onSubmit={(e) => e.preventDefault()}>
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
          <InputV2
            className={"border-[#eaeaea] "}
            placeholder="Name * "
            required={true}
          />
        </div>
        <div className="">
          <span className="mb-2 block">
            Name <span className="text-main-color">*</span>
          </span>
          <InputV2
            className={"border-[#eaeaea] "}
            placeholder="Email * "
            required={true}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
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

        <div className="mb-4">
          <Button label={"SUBMIT"} type="submit" />
        </div>
      </form>
    </div>
  );
}

function Comment({
  comment,
  getDate,
  children,
  showReply,
  onReply,
  onCancel,
  onSelectRating,
  rating,
}) {
  const authorName = comment?.author?.node?.name;

  const stars = generateStart(comment?.rating);

  const avatar = comment?.author?.node?.avatar?.url;

  return (
    <div>
      <div className="py-[15px]">
        <div className="flex ">
          <div className="min-w-[60px] min-h-[60px] h-[60px]">
            <img src={avatar} alt="" className="w-full h-full rounded-full" />
          </div>

          <div className="ml-[30px]">
            <div>
              <div className="leading-[1] mb-[5px]">{stars}</div>
              <div className="mb-[5px]">
                <strong>{authorName}</strong>
                <span className="mx-1">-</span>
                <span>{getDate()}</span>
              </div>
            </div>
            <div
              className="mb-[16px]"
              dangerouslySetInnerHTML={{ __html: comment?.content }}
            ></div>
          </div>
        </div>
      </div>

      {showReply(comment.id) && (
        <CommentForm
          nameUser={authorName}
          onCancel={onCancel}
          rating={rating}
        />
      )}

      {/* {children.map((commentChil) => {
        return (
          <div key={commentChil?.id} className="md:pl-[60px]">
            <Comment
              comment={commentChil}
              getDate={getDate}
              children={[]}
              onCancel={onCancel}
              onReply={() => onReply(commentChil.id)}
              showReply={showReply}
              onSelectRating={onSelectRating}
              rating={rating}
            />
          </div>
        );
      })} */}
    </div>
  );
}

export default Pages;
