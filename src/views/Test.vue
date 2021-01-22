<template>
  <div>
    <label for="userId">id</label>
    <input type="text" name="userId" id="userId" v-model="userId"/>
    <label for="password">비밀번호</label>
    <input type="password" name="userPassword" id="userPassword" v-model="userPassword"/>
    <input type="submit" value="로그인" id="login" @click="login" />
    <span>
      사용자 정보:
      <span>{{ message }}</span>
    </span>
    <hr />
    <button id="getInfo" @click="getInfo">정보 확인</button>
    <button id="logout" @click="logout">로그 아웃</button>
    <hr />
    <table>
      <tr>
        <th>상태</th>
        <th id="status">{{ status }}</th>
      </tr>
      <tr>
        <th>정보</th>
        <th id="info">{{ info }}</th>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

const storage = window.sessionStorage;

const ai = axios.create({
  baseURL: "http://localhost:8080",
});

export default {
  data() {
    return {
      userId: "",
      userPassword: "",
      message: "로그인 해주세요.",
      status: "",
      info: "",
    };
  },
  methods: {
    setInfo(status, info) {
      this.status = status;
      this.info = info;
    },
    logout() {
      storage.setItem("jwt-auth-token", "");
      storage.setItem("login_uwr", "");
      this.message = "로그인 해주세요.";
      this.setInfo("로그아웃 성공", "", "");
    },
    getInfo() {
      ai.post(
        "/info",
        {
          userId: "someTest",
          userPassword: "some password",
        },
        {
          headers: {
            "jwt-auth-token": storage.getItem("jwt-auth-token"),
          },
        }
      ).then((response) => {
        this.setInfo(
          "정보 조회 성공",
          JSON.stringify(response.data),
        );
      }).catch(e => {
        this.setInfo("정보 조회 실패", "", e.response.data.msg);
      })
    },
    login(){
      storage.setItem("jwt-auth-token","");
      storage.setItem("login_user","");
      ai.post("/login", {
        userId: this.userId,
        userPassword: this.userPassword
      }).then(response => {
        if(response.data.msg === "success") {
          
          this.message = response.data.msg + "로 로그인 되었습니다.";
          this.setInfo(
            response.data.msg,
            JSON.stringify(response.data)
          )
          console.log(response.headers);

          axios.defaults.headers.common["x-access-token"] = response.headers["jwt-auth-token"];

        }else{
          this.setInfo("","","");
          this.message="로그인 해주세요.";
          alert("입력 정보를 확인하세요.");
          console.log(response);
        }
      }).catch(e => {
        this.setInfo("실패", JSON.stringify(e.response||e.message));
      })
    },
    init(){
      if(storage.getItem("jwt-auth-token")){
        this.message = storage.getItem("login_out")+"로 로그인 되었습니다.";
      }else {
        storage.setItem("jwt-auth-token", "");
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style scoped>
table{
  border-collapse: collapse;
  width: 100%;
  word-break: break-all;
}
th{
  width: 50px;
}
td, th{
  border: 1px solid black;
}
</style>