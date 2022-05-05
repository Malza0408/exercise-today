/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as Api from "../../../api";
import { UserStateContext } from "../../../App";
import {
  Layout,
  CardBody,
  CardImg,
  CardTitle,
  FriendTitle,
  CardSubTitle,
  CardTextWrapper,
  NetworkButtonWrapper,
} from "./UserCard.style";
import {
  UserLikePageButton,
  UserLikeButton,
} from "./likeButtonSection/UserLikeButton";

function UserCard({
  user,
  setIsEditing,
  isEditable,
  likedUsers,
  isNetwork,
  isLikePage,
  isLikeEditable,
}) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  // 자신의 카드인지 확인하기 위한 용도
  const userState = useContext(UserStateContext);
  const [isMyCard, setIsMyCard] = useState(false);

  useEffect(() => {
    // 네트워크일 경우 like를 표시해야 함
    if (isNetwork) {
      if (userState.user.id === user.id) {
        setIsMyCard(true);
      }

      const isExistUser = likedUsers.findIndex(
        (currentUserId) => currentUserId === user.id
      );
      if (isExistUser !== -1) {
        // 좋아요 목록에 존재하는 유저일 경우 liked 표시
        setIsLiked(true);
      }
    }

    // 북마크 페이지일 경우 isLiked의 기본은 true
    if (isLikePage) {
      setIsLiked(true);
    }
  }, [likedUsers]);

  // 클릭시 북마크 페이지로 이동시킴
  const handleClickLikePage = () => {
    navigate(`/like/${user.id}`);
  };

  // 좋아요 수정
  const handleClickLike = async () => {
    try {
      await Api.put("like/person", { person: user.id });
      setIsLiked((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <CardBody>
        <CardImg src={user?.imageLink} alt="유저 프로필 사진" />
        {/* {!isNetwork && isLiked ? (
          <FriendTitle>{user?.name}</FriendTitle>
        ) : (
          <CardTitle>{user?.name}</CardTitle>
        )} */}
        <CardTitle>{user?.name}</CardTitle>
        <CardSubTitle>{user?.email}</CardSubTitle>
        <CardTextWrapper>
          <span>{user?.description}</span>
        </CardTextWrapper>

        {isEditable && (
          <Button
            variant="outline-info"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            편집
          </Button>
        )}

        {isNetwork && (
          <NetworkButtonWrapper>
            <UserLikePageButton onClick={handleClickLikePage} />
            {!isMyCard && (
              <UserLikeButton isLiked={isLiked} onClick={handleClickLike} />
            )}
          </NetworkButtonWrapper>
        )}

        {isLikePage && (
          <NetworkButtonWrapper>
            <UserLikePageButton onClick={handleClickLikePage} />
            {isLikeEditable && (
              <UserLikeButton isLiked={isLiked} onClick={handleClickLike} />
            )}
          </NetworkButtonWrapper>
        )}
      </CardBody>
    </Layout>
  );
}

export default UserCard;
