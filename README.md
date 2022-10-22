GitLab에서 진행된 프로젝트입니다. (mirroring을 통해 github로 이동)

기술 문서(API 레퍼런스, 시스템 아키텍쳐, ERD, 스타일 가이드 등)관련 내용은 1팀의 GitLab Wiki에 업로드되었습니다.

# 오늘도 운동
- 어떤 운동을 할 지 고민하는데 시간을 쓰지 마세요!

## 1. 서비스 실행
```
git clone https://github.com/Malza0408/exercise-today.git
cd exercise-today
```

- Front
```
cd front
yarn install
yarn start
```
- Back
```
cd back
yarn install
yarn start
```

## 2. 프로젝트 소개

### 사용한 데이터
  - [Calories Burned During Exercise and Activities](https://www.kaggle.com/datasets/aadhavvignesh/calories-burned-during-exercise-and-activities): 운동별 시간당 칼로리 데이터  
  - [Calories in Food Items (per 100 grams)](https://www.kaggle.com/datasets/kkhandekar/calories-in-food-items-per-100-grams): 음식별 칼로리 데이터  
  - [Fitness Exercises](https://www.kaggle.com/datasets/edoardoba/fitness-exercises-with-animations): 부위, 기구별 운동 데이터  
  - [Spotify 1.2M+ Songs](https://www.kaggle.com/datasets/rodolfofigueroa/spotify-12m-songs): spotify api로 얻은 120만곡의 음악 데이터  
  - [Top Spotify songs from 2010-2019 - BY YEAR](https://www.kaggle.com/datasets/leonardopena/top-spotify-songs-from-20102019-by-year):  spotify 연도별 1위 음악 데이터(2010 ~ 2019)  
  - [Starter: World Happiness Report 3e383691-d](https://www.kaggle.com/code/tmai56/starter-world-happiness-report-3e383691-d): 행복한 국가 순위 분석 데이터(2021)  
  - [당뇨와 운동](https://www.kaggle.com/code/bayunova/diabetes-health-indicators): 당뇨와 운동  
  - [체중별 심장병 발병률](https://www.kaggle.com/code/bhuvanchennoju/data-storytelling-auc-focus-on-strokes): 체중별 심장병 발병률  

### 기술 스택
  - JavaScript
  - React
  - node.js
  - Python 3

### 데이터베이스
  - mongoDB
  - AWS

### 사용된 라이브러리
  - reChart
  - mui
  - styled-components
  - day.js
  - full-calendar
  - recoil
  - pandas
  - numpy
  - matplotlib
  - missingno

### 웹서비스 개요
1. 비로그인 사용자들도 사이트 이용 가능
* 얼마나 해야 할까? - 잔여 칼로리 소모를 위한 추천 운동 및 운동에 따른 권장 시간 제공
* 어떻게 해야 할까? - 부위별, 도구별 운동 데이터를 통해 가장 효과적인 운동 방법 추천
* 음악 추천 기능 - 데이터 분석을 통해 엄선된 음악 데이터를 기반으로 기호에 맞는 음악 추천

2. 회원들에게는 추가 기능 제공
* 캘린더 기능 - 체중과 칼로리를 기록하는 캘린더 기능 제공
* 간편 로그인 - 구글, 카카오, 네이버 oAuth를 통한  간편 로그인
* 북마크 기능 - 회원을 위한 운동, 음식, 회원, 음악 북마크 기능


## 3. 프로젝트 목표
##### 1. 메인 목표
* 운동 추천 사이트를 만들자!
* 운동 효과를 높일 음악 추천 기능을 만들자!

##### 2. 서브 목표
* 운동 목표 달성을 도울 캘린더 기능을 추가하자!
* 구글, 카카오, 네이버 oAuth 기능을 추가하자!
* nodemailer 기능을 추가하자!
* 북마크 기능을 추가하자!

##### 3. 데이터 분석
* 운동 추천에 활용될 '데이터' 분석을 하자!
* 운동의 장점을 설명하는 데이터 '분석'을 하자!


## 4. 프로젝트 기능 설명

  ### 메인 기능 
  - 칼로리별 운동 추천
  - 부위별 운동 추천
  - 음악 추천

  ### 서브 기능
  - 캘린더 기능
  - 북마크 기능

  ### 프로젝트만의 차별점, 기대 효과
  - 칼로리 계산, 부위별 운동, 음악 등 다양한 서비스를 제공하여 사용자가 보다 쉽게 운동 할 수 있도록 도와줍니다
  - 체중, 식단, 운동 기록을 통해 꾸준한 운동을 할 수 있도록 유도합니다
  - 다른 사용자의 좋아요 기록을 볼 수 있어 공통 관심사를 가진 사용자를 찾을 수 있습니다.
  - 부위별, 도구별 운동 추천을 시각화하여 보여줍니다.
  - 데이터 분석을 통해 엄선된 음악 데이터를 사용자의 기호에 따라 필터링하여 제공합니다.

## 5. 프로젝트 구성도
  - [오늘도 운동 와이어프레임](https://www.figma.com/file/aqjh4XO6Ivdjs8hcNmk94L/%EC%98%A4%EB%8A%98%EB%8F%84-%EC%9A%B4%EB%8F%99?node-id=0%3A1)



## 6. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 박정훈 | 프론트엔드 개발 / 발표 |
| 이예원 | 프론트엔드 개발 |
| 서정현 | 백엔드 개발 |
| 송경아 | 백엔드 개발 |
| 최재익 | 백엔드 개발 / 팀장 |

**데이터 분석 과정에는 모든 팀원들이 참여하였습니다.**

**멤버별 responsibility**

1. 팀장 

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

 3. 백엔드 & 데이터 담당  

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

## 7. 데모
### 메인 페이지
![main](https://user-images.githubusercontent.com/82519572/197346455-dbd47521-6534-4191-bafa-a5a084093d32.gif)

### 섭취한 칼로리를 태우기 위해 얼마나 운동해야 하는지 시각화
![calorie](https://user-images.githubusercontent.com/82519572/197346781-fdb5cde2-ee00-4ec7-b453-e436086387ff.gif)

### 음악 추천 페이지
![music](https://user-images.githubusercontent.com/82519572/197347332-81b5be80-f965-4a9e-abd6-91b0f98c93ab.gif)

### 캘린더
용량이 큰 관계로 영상으로 대체합니다.  
[calendar](https://drive.google.com/file/d/1ouJIOn-2UsIKwY7-yCUpDxCfslmkELp_/view?usp=sharing)
