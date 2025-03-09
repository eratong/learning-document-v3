
# swagger
## 基础
## web界面介绍
## java项目使用
不一定按这个来，项目环境不同随机应变

导入依赖包
```java
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.9.2</version>
            <exclusions>
                <exclusion>
                    <groupId>io.swagger</groupId>
                    <artifactId>swagger-models</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <dependency>
            <groupId>io.swagger</groupId>
            <artifactId>swagger-models</artifactId>
            <version>1.5.21</version>
        </dependency>
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.9.2</version>
        </dependency>
```
添加swagger配置类
```java
@Configuration
@EnableSwagger2
//@Profile(value = {"local","qa", "dev"})
public class SwaggerConfig2 {

        @Bean
        public Docket createRestApi() {
            return new Docket(DocumentationType.SWAGGER_2)
                    .pathMapping("/")
                    .apiInfo(apiInfo())
                    .select()
                    // 复杂controller结构配多个
                    .apis(Predicates.or(RequestHandlerSelectors.basePackage("com.ontg"), RequestHandlerSelectors.basePackage("com.tong")))
                    .paths(PathSelectors.any())
                    .build();
        }

        private ApiInfo apiInfo() {
            return new ApiInfoBuilder()
                    .title("接口文档")
                    .version("1.0")
                    .build();
        }
}

```

```java
    spring.mvc.pathmatch.matching-strategy= ant_path_matcher
```
