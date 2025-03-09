# apollo

## 基础
Apollo配置管理框架是携程开源的一款分布式配置管理平台，用于解决企业级应用中的配置管理问题。\
它提供了以下功能：
> 配置中心：可以将应用的配置集中管理，支持多环境、多版本管理。\
> 实时发布：可以实现配置修改后即时生效，无需重启应用或者重新部署。\
> 权限管理：可以对不同用户或者团队设置不同的权限，保证配置的安全性。\
> 客户端SDK：支持多种语言的客户端SDK，可以方便地接入应用程序，读取配置信息。\
> 监控报警：可以对配置进行监控，当配置发生变化或者异常时，可以及时进行报警通知。


开源地址\
https://github.com/ctripcorp/apollo

## 安装
## web界面介绍
## java项目使用
导包
```xml
    <dependency>
        <groupId>com.ctrip.framework.apollo</groupId>
        <artifactId>apollo-client</artifactId>
        <version>todo</version>
    </dependency>
```
配置
```java
apollo.cluster = dev
apollo.configServic = http://127.0.0.1
```
使用
```java
${params.test1}
```

实时更新

```java
@Data
@Configuration
@ConfigurationProperties(prefix = "params")
public class ParamProperties {
    private String test1;
}
```

```java
@Slf4j
@Component
public class ParamPropertiesRefresher implements ApplicationContextAware {
    private ApplicationContext applicationContext;

    @ApolloConfigChangeListener(interestedKeyPrefixes = "params.")
    public void onChange(ConfigChangeEvent changeEvent) {
        log.info("Refreshing params properties!");
        this.applicationContext.publishEvent(new EnvironmentChangeEvent(changeEvent.changedKeys()));
        log.info("params properties refreshed!");
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }
}
```

item.key.length.limit - 配置项 key 最大长度限制 默认配置是128。\
item.value.length.limit - 配置项 value 最大长度限制 默认配置是20000。

## 参考链接
<https://blog.csdn.net/fj56355113/article/details/108586612>\
<https://github.com/apolloconfig/apollo-use-cases>


## 灰度发布 todo