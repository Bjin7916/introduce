import * as S from "../../styles/theme";
import "../../styles/skeleton.css";
import me from "../../images/itsme.jpg";

function Profile() {
    return (
        <S.content_wrap>
            <S.title>Jin's Profile!</S.title>
            <S.content>
                <S.imgBox>
                    <img
                        src={me}
                        width={"240px"}
                        height={"300px"}
                        alt="myself"
                    />
                </S.imgBox>
                <table className="table">
                    <tr>
                        <td>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 름</td>
                        <td>정범진</td>
                    </tr>
                    <tr>
                        <td>생년월일</td>
                        <td>1990.07.21</td>
                    </tr>
                    <tr>
                        <td>거주지역</td>
                        <td>서울시 동작구 상도동</td>
                    </tr>
                    <tr>
                        <td>E-Mail</td>
                        <td>jine7916@gmail.com</td>
                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td>
                            <a href="https://github.com/Bjin7916">
                                https://github.com/Bjin7916
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            기술스택
                        </td>
                        <td>
                            Java, Spring, Spring Framework, React, MYSQL, Tomcat, JavaScript etc
                        </td>
                    </tr>
                </table>

                
            </S.content>
        </S.content_wrap>
    );
}
export default Profile;
