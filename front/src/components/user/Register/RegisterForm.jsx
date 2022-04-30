import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Api from "../../../api";
import {
  StyledRegitserButton,
  StyledContainer,
  StyledTextField,
  StyledInputLayout,
  StyledButtonWrapper,
  StyledInputContainer,
  StyledWarningMessage,
  StyledBirthInput,
  StyledOutLine,
  StyledButtonGroup,
  StyledSexButton,
  StyledHeightInput,
  StyledWeightInput,
  StyledHWInfo,
} from "./RegisterForm.style";

function RegisterForm() {
  const navigate = useNavigate();

  //useState로 email 상태를 생성함.
  // const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [isValidId, setIsValidId] = useState(true);
  const [isValidpassword, setIsValidPassword] = useState(true);
  const [isSamePassword, setIsSamePassword] = useState(true);
  // const [name, setName] = useState("");
  // 생년월일
  const [birthday, setBirthday] = useState("");
  // 성별
  const [isClickSexBtn, setIsClickSexBtn] = useState(false);

  const idRef = useRef();
  const emailRef = useRef();
  const confirmPasswordRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();

  //이메일이 abc@example.com 형태인지 regex를 이용해 확인함.
  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //위 validateEmail 함수를 통해 이메일 형태 적합 여부를 확인함.
  // const isEmailValid = validateEmail(email);
  // 비밀번호가 4글자 이상인지 여부를 확인함.
  // const isPasswordValid = password.length >= 4;
  // 비밀번호와 확인용 비밀번호가 일치하는지 여부를 확인함.
  // const isPasswordSame = password === confirmPassword;
  // 이름이 2글자 이상인지 여부를 확인함.
  // const isNameValid = name.length >= 2;

  // 위 4개 조건이 모두 동시에 만족되는지 여부를 확인함.
  // const isFormValid =
  //   isEmailValid && isPasswordValid && isPasswordSame && isNameValid;

  const handleOnClickRegister = async (e) => {
    // id가 4자리가 안되면 안됨
    if (idRef.current.value.length < 4) {
      setIsValidId(false);
    } else {
      setIsValidId(true);
    }
    if (password.length < 4) {
      setIsValidPassword(false);
      return;
    } else {
      if (password !== confirmPasswordRef.current.value) {
        setIsValidPassword(true);
        setIsSamePassword(false);
        return;
      } else {
        setIsValidPassword(true);
        setIsSamePassword(true);
      }
    }

    e.preventDefault();

    try {
      await Api.post("user/register", {
        email: emailRef.current.value,
        password,
        passwordCheck: confirmPasswordRef.current.value,
        name: idRef.current.value,
        height: Number(heightRef.current.value),
        weight: Number(weightRef.current.value),
        gender: isClickSexBtn === true ? "male" : "female",
      });

      // 로그인 페이지로 이동함.
      navigate("/login");
    } catch (err) {
      console.log("회원가입에 실패하였습니다.", err);
    }
  };

  return (
    <StyledContainer>
      <StyledInputLayout>
        <StyledOutLine>
          <StyledInputContainer>
            <StyledTextField
              id="id-input"
              label="id"
              type="text"
              autoComplete="current-id"
              variant="standard"
              color="secondary"
              inputRef={idRef}
            />
            {!isValidId && (
              <StyledWarningMessage>
                4자리 이상 적어주세요.
              </StyledWarningMessage>
            )}
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledTextField
              id="email-input"
              label="email"
              type="email"
              autoComplete="current-email"
              variant="standard"
              color="secondary"
              inputRef={emailRef}
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledTextField
              id="password-input"
              label="password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              color="secondary"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {!isValidpassword && (
              <StyledWarningMessage>
                4자리 이상 적어주세요.
              </StyledWarningMessage>
            )}
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledTextField
              id="password-check-input"
              label="password check"
              type="password"
              autoComplete="current-password-check"
              variant="standard"
              color="secondary"
              inputRef={confirmPasswordRef}
              disabled={password.length < 4}
            />
            {!isSamePassword && (
              <StyledWarningMessage>비밀번호를 확인하세요</StyledWarningMessage>
            )}
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledWarningMessage style={{ color: "#767676" }}>
              생년월일
            </StyledWarningMessage>
            <StyledBirthInput
              id="birthday"
              type="date"
              variant="standard"
              color="secondary"
              onChange={(e) => {
                setBirthday(e.target.value);
                console.log("생년월일 : ", e.target.value);
                console.log("생년월일 타입 : ", typeof e.target.value);
              }}
            />
          </StyledInputContainer>
          <StyledButtonGroup
            variant="outlined"
            aria-label="outlined button group"
          >
            <StyledSexButton
              isclicksexbtn={isClickSexBtn + ""}
              onClick={() => {
                setIsClickSexBtn(true);
              }}
            >
              남자
            </StyledSexButton>
            <StyledSexButton
              isclicksexbtn={!isClickSexBtn + ""}
              onClick={() => {
                setIsClickSexBtn(false);
              }}
            >
              여자
            </StyledSexButton>
          </StyledButtonGroup>
          <StyledHWInfo>
            <StyledHeightInput
              id="height"
              label="height"
              type="number"
              autoComplete="current-height"
              variant="standard"
              color="secondary"
              inputRef={heightRef}
            />
            <StyledWeightInput
              id="weight"
              label="weight"
              type="text"
              autoComplete="current-weight"
              variant="standard"
              color="secondary"
              inputRef={weightRef}
            />
          </StyledHWInfo>
          <StyledButtonWrapper>
            <StyledRegitserButton onClick={handleOnClickRegister}>
              가입하기
            </StyledRegitserButton>
          </StyledButtonWrapper>
        </StyledOutLine>
      </StyledInputLayout>
    </StyledContainer>
  );
}

export default RegisterForm;
