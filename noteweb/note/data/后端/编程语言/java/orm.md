
# orm框架

### Mybatis
----------

### Mybatis-plus
----------


### Mybatis-flex
----------


### Jooq
----------


### Spring data JPA
官网 https://springdoc.cn/spring-data-jpa/ \
Spring Data JPA 可以理解为 JPA 规范的再次封装抽象，底层还是使用了 Hibernate 的 JPA 技术实现。

#### JAVA中使用JPA
##### 新增
```java
例 userRepository.save(newUser);
```

##### 删除
```java
// 单个删除
deleteBy/removeBy 后面跟要查询的字段名，用于精确匹配。
delete/remove 后面跟要查询的字段名，使用条件表达式进行模糊匹配。
例 deleteByUsername(String username);

// 批量删除
deleteInBatch 根据传入的集合批量删除记录
例 deleteInBatch(Collection<User> users);
```

##### 更新
```java
updateBy 后面跟要查询的字段名，用于精确匹配。
update 后面跟要查询的字段名，使用条件表达式进行模糊匹配。
    支持的关键字：
    Set：用于设置要更新的字段的值。
    Where：用于指定更新操作的条件。
例 updateByUsername(String username);
```

##### 查询
```java
findBy/getBy/queryBy/readBy 后面跟要查询的字段名，用于精确匹配。
        例 findByUsername(String username)
find/get/query/read 后面跟要查询的字段名，使用条件表达式进行模糊匹配。
findAll/getAll 后面不跟字段名，表示查询所有记录。
支持的关键字：
    And：连接多个查询条件，相当于 SQL 中的 AND。
        例 findByUsernameAndPassword(String username, String password);
    Or：连接多个查询条件，相当于 SQL 中的 OR。
        例 findByUsernameOrPassword(String username, String password);
    Between：用于查询字段在某个范围内的记录。
    LessThan/LessThanEqual：用于查询字段小于某个值的记录。
        例 findByAgeLessThan(int age);
    GreaterThan/GreaterThanEqual：用于查询字段大于某个值的记录。
        例 findByAgGreaterThan(int age);
    IsNull/IsNotNull：用于查询字段为空或不为空的记录。
        例 findByEmailIsNull();
    Like/NotLike：用于模糊查询字段值。
        例 findByUsernameLike(String username);
    OrderBy：用于指定查询结果的排序方式。
        例 findByAgeOrderByLastNameAsc(int age);

组合
例 Data findFirstByNameIsStartingWithAndStatusNotOrderByType(String name, Integer Status)

```

##### 统计
```java
countBy 后面跟要查询的字段名，用于精确匹配。
count 后面不跟字段名，表示统计所有记录数。
例 countByUsername(String username);
```

##### 自定义
```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // 自定义查询方法
    @Query("SELECT u FROM User u WHERE u.username = ?1")
    User findByUsernameCustom(String username);

}
```

#### 底层原理
核心类 CrudRepository

#### 日志配置
```java
 <logger name="org.hibernate.SQL" level="DEBUG"/>
```


参考文档 https://juejin.cn/post/7366972839780941874?searchId=202406271456062DC2D23377089BD6136B

----------

### Spring JdbcTemplate
----------


### Spring JdbcClient
----------


### Hibernate
----------


参考文档 https://juejin.cn/post/7366972839780941874?searchId=202406271456062DC2D23377089BD6136B