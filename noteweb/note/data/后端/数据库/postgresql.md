# postgresql

## 基础
开源关系数据库，支持非关系和关系数据类型

### 源码(C)

### 默认端口5432

### 使用场景


参考文档

中文社区 http://www.postgres.cn/v2/document

https://www.postgresql.org/docs/

### 目录结构
```
find . -type f -name "*postgres*"

cd /var/lib/postgresql/data

-bash-4.2$ tree -L 1 -d /var/lib/postgresql/data
/var/lib/postgresql/data              --数据目录
├── base                              --表和索引文件存放目录
├── global                            --影响全局的系统表存放目录
├── pg_commit_ts                      --事务提交时间戳数据存放目录
├── pg_dynshmem                       --被动态共享所使用的文件存放目录
├── pg_logical                        --用于逻辑复制的状态数据
├── pg_multixact                      --多事务状态的数据
├── pg_notify                         --LISTEN/NOTIFY状态的数据
├── pg_replslot                       --复制槽数据存放目录
├── pg_serial                         --已提交的可序列化信息存放目录
├── pg_snapshots                      --快照
├── pg_stat                           --统计信息
├── pg_stat_tmp                       --统计信息子系统临时文件
├── pg_subtrans                       --子事务状态数据
├── pg_tblspc                         --表空间
├── pg_twophase                       --预备事务状态文件
├── pg_wal                            --事务日志（预写日志）
└── pg_xact                           --日志提交状态的数据存放目录
```

### 表类型
在 PostgreSQL 中，你可以使用常规表、外部表和分区表来存储数据。这三种表的概念如下：

常规表：常规表是最基本的表类型，在 PostgreSQL 中通常使用的表就是常规表。它们存储在数据库的默认表空间中，数据被存储在数据库服务器的数据目录中。

外部表：外部表是一种特殊的表，它并不实际存储数据，而是提供了对外部数据源的访问。外部表的数据可以是位于远程服务器上的文件、其他数据库的表、Hadoop HDFS 中的数据等。外部表提供了一种透明访问外部数据源的方式，使得可以在 PostgreSQL 中像访问常规表一样查询外部数据。

分区表：分区表是将表数据按照某种规则分成多个子表进行存储的一种表类型。这样做的目的是可以更高效地管理和查询大量数据。例如，可以按照时间范围或者其他业务逻辑来分区，每个分区可以独立进行维护和查询，从而提高了查询性能和管理效率。

### 数据类型

#### 数值类型
- **整数类型**
  - `smallint`: 2字节，范围 -32,768 到 32,767
  - `integer` 或 `int`: 4字节，范围 -2,147,483,648 到 2,147,483,647
  - `bigint`: 8字节，范围 -9,223,372,036,854,775,808 到 9,223,372,036,854,775,807
  - `serial`: 自动增长的4字节整数（相当于`integer` + 自增)
  - `bigserial`: 自动增长的8字节整数（相当于`bigint` + 自增)

- **精确数值**
  - `numeric(p, s)`: 可变精度和小数位数的数值
  - `decimal(p, s)`: `numeric`的别名

- **浮点数类型**
  - `real`: 4字节，单精度浮点数
  - `double precision`: 8字节，双精度浮点数

#### 字符串类型
- **字符类型**
  - `char(n)`: 固定长度字符类型
  - `varchar(n)`: 可变长度字符类型，最多 `n` 字符
  - `text`: 可变不限长度的字符类型

#### 日期和时间类型
如果您处理的是本地时间，而不关心其与全球标准时间（UTC）的关系，则可以使用不带时区的日期/时间类型。
- `date`: 日期类型（年、月、日）
- `time [ (p) ] [ without time zone ]`: 时间类型（无时区）
- `time [ (p) ] with time zone`: 时间类型（带时区）
- `timestamp [ (p) ] [ without time zone ]`: 时间戳类型（日期和时间，带可选精度）
- `timestamp [ (p) ] with time zone`: 带时区的时间戳类型
- `interval`: 时间间隔类型（用于表示两个时间点之间的差值）

#### 布尔类型
- `boolean`: 布尔类型，取值为 `TRUE`、`FALSE` 或 `NULL`

#### 枚举类型
- `enum`: 枚举类型，用户自定义类型，用于定义一组有序值

#### 二进制类型
- `bytea`: 可变长度的二进制字符串

#### UUID类型
- `uuid`: 通用唯一标识符

#### 网络地址类型
- `cidr`: IPv4 或 IPv6 网络
- `inet`: IPv4 或 IPv6 主机地址
- `macaddr`: MAC 地址
- `macaddr8`: EUI-64 MAC 地址

#### 其他类型
- **货币类型**
  - `money`: 货币金额（带有货币符号的数字）
- **几何类型**
  - `point`: 一个点，包含 x 和 y 坐标
  - `line`: 无限长的直线
  - `lseg`: 线段
  - `box`: 矩形
  - `path`: 路径（开放或封闭）
  - `polygon`: 多边形
  - `circle`: 圆
- **文本搜索类型**
  - `tsvector`: 文本向量
  - `tsquery`: 文本查询
- **JSON数据类型**
  - `json`: 文本格式的JSON数据
  - `jsonb`: 二进制格式的JSON数据，带有索引支持
- **数组类型**
  - PostgreSQL支持几乎所有基本数据类型的数组，例如：`integer[]`, `text[]`等
- **范围类型**
  - `int4range`: `integer`范围
  - `int8range`: `bigint`范围
  - `numrange`: `numeric`范围
  - `tsrange`: `timestamp without time zone`范围
  - `tstzrange`: `timestamp with time zone`范围
  - `daterange`: `date`范围

#### 自定义类型
- **复合类型**：用户可以定义自己的复合数据类型，类似于C语言中的结构体。
- **域类型**：基于现有类型创建带有约束的域。

参考文档 
https://www.runoob.com/postgresql/postgresql-data-type.html


## 常用语句
### postgresql操作
#### 1、当前总共正在使用的连接数
```sql
select count(1) from pg_stat_activity;
```
#### 2、查看版本
```sql
SELECT version();
```
### 数据库操作
#### 1、终止执行语句
第一种pg_cancel_backend,这种方式只能kill select查询，对update、delete 及DML不生效)
```sql
SELECT pg_cancel_backend(PID);
```
第二种pg_terminate_backend,这种可以kill掉各种操作(select、update、delete、drop等)操作
```sql
SELECT pg_terminate_backend(PID);
```

#### 2、查看语句执行计划 explain
```sql
一、执行计划参数
EXPLAIN
SELECT * FROM "public"."sys_operate_log" WHERE "public"."sys_operate_log".log_id ='1' LIMIT 1000 OFFSET 0;

Limit  (cost=0.00..30.30 rows=1 width=596)
  ->  Seq Scan on sys_operate_log  (cost=0.00..30.30 rows=1 width=596)
        Filter: ((log_id)::text = '1'::text)

多个像这样写
EXPLAIN (VERBOSE, ANALYZE)
SELECT * FROM "public"."sys_operate_log" WHERE "public"."sys_operate_log".log_id ='1' LIMIT 1000 OFFSET 0;

EXPLAIN ANALYZE [ boolean ] 
实际执行SQL获取实际的执行计划
ANALYZE 选项为TRUE 会实际执行SQL，并获得相应的查询计划，默认为FALSE。如果优化一些修改数据的SQL 需要真实的执行但是不能影响现有的数据，可以放在一个事务中，分析完成后可以直接回滚。

EXPLAIN VERBOSE [ boolean ]
VERBOSE 选项为TRUE 会显示查询计划的附加信息，默认为FALSE。附加信息包括查询计划中每个节点（后面具体解释节点的含义）输出的列（Output），表的SCHEMA 信息，函数的SCHEMA 信息，表达式中列所属表的别名，被触发的触发器名称等。

EXPLAIN COSTS [ boolean ]
COSTS 选项为TRUE 会显示每个计划节点的预估启动代价（找到第一个符合条件的结果的代价）和总代价，以及预估行数和每行宽度，默认为TRUE。

EXPLAIN BUFFERS [ boolean ]
BUFFERS 选项为TRUE 会显示关于缓存的使用信息，默认为FALSE。该参数只能与ANALYZE 参数一起使用。缓冲区信息包括共享块（常规表或者索引块）、本地块（临时表或者索引块）和临时块（排序或者哈希等涉及到的短期存在的数据块）的命中块数，更新块数，挤出块数。

EXPLAIN TIMING [ boolean ]
TIMING 选项为TRUE 会显示每个计划节点的实际启动时间和总的执行时间，默认为TRUE。该参数只能与ANALYZE 参数一起使用。因为对于一些系统来说，获取系统时间需要比较大的代价，如果只需要准确的返回行数，而不需要准确的时间，可以把该参数关闭。

EXPLAIN SUMMARY [ boolean ]
SUMMARY 选项为TRUE 会在查询计划后面输出总结信息，例如查询计划生成的时间和查询计划执行的时间。当ANALYZE 选项打开时，它默认为TRUE。

EXPLAIN FORMAT { TEXT | XML | JSON | YAML }
FORMAT 指定输出格式，默认为TEXT。各个格式输出的内容都是相同的，其中XML | JSON | YAML 更有利于我们通过程序解析SQL 语句的查询计划，为了更有利于阅读，我们下文的例子都是使用TEXT 格式的输出结果。



二、扫描方式
Seq Scan on pg_table_test  (cost=0.00..1935.00 rows=100000 width=45)
Seq Scan 表示全表扫描（顺序扫描）cost=0.00..1935.00 rows=100000 width=45 表示查询消耗的成本以及返回行数

简单来说
全表扫描 Seq Scan
索引扫描 Index Scan
位图扫描 Bitmap Heap Scan
  位图扫描也是走索引的方式，方法是扫描索引，把满足条件的行或块在内存中建一个位图，扫描完索引后，再根据位图到表的数据文件中把相应的数据读出来。如果走了两个索引，可以把两个索引形成的位图通过 AND 或 OR 计算合并成一个，再到表的数据文件中把数据读出来。
条件过滤 filter

总的来说
Seq Scan，顺序扫描
Index Scan，基于索引扫描，但不只是返回索引列的值
IndexOnly Scan，基于索引扫描，并且只返回索引列的值，简称为覆盖索引
BitmapIndex Scan，利用Bitmap 结构扫描
BitmapHeap Scan，把BitmapIndex Scan 返回的Bitmap 结构转换为元组结构
Tid Scan，用于扫描一个元组TID 数组
Subquery Scan，扫描一个子查询
Function Scan，处理含有函数的扫描
TableFunc Scan，处理tablefunc 相关的扫描
Values Scan，用于扫描Values 链表的扫描
Cte Scan，用于扫描WITH 字句的结果集
NamedTuplestore Scan，用于某些命名的结果集的扫描
WorkTable Scan，用于扫描Recursive Union 的中间数据
Foreign Scan，用于外键扫描
Custom Scan，用于用户自定义的扫描


explain(ANALYZE,VERBOSE,BUFFERS) select * from class where st_no=2;
                                               QUERY PLAN
--------------------------------------------------------------------------------------------------------
 Seq Scan on public.class  (cost=0.00..26.00 rows=1 width=35) (actual time=0.136..0.141 rows=1 loops=1)
   Output: st_no, name
   Filter: (class.st_no = 2)
   Rows Removed by Filter: 1199
   Buffers: shared hit=11
 Planning time: 0.066 ms
 Execution time: 0.160 ms

Seq Scan on public.class 表明了这个节点的类型和作用对象，即在class 表上进行了全表扫描 | (cost=0.00..26.00 rows=1 width=35) 表明了这个节点的代价估计，这部分我们将在下文节点代价估计信息中详细介绍 | (actual time=0.136..0.141 rows=1 loops=1) 表明了这个节点的真实执行信息，当E
Output: st_no, name 表明了SQL 的输出结果集的各个列，当EXPLAIN 命令中的选项VERBOSE 为on时才会显示
Filter: (class.st_no = 2) 表明了Seq Scan 节点之上的Filter 操作，即全表扫描时对每行记录进行过滤操作，过滤条件为class.st_no = 2
Rows Removed by Filter: 1199 表明了过滤操作过滤了多少行记录，属于Seq Scan 节点的VERBOSE 信息，只有EXPLAIN 命令中的VERBOSE 选项为on 时才会显示
Buffers: shared hit=11 表明了从共享缓存中命中了11 个BLOCK，属于Seq Scan 节点的BUFFERS 信息，只有EXPLAIN 命令中的BUFFERS 选项为on 时才会显示
Planning time: 0.066 ms 表明了生成查询计划的时间
Execution time: 0.160 ms 表明了实际的SQL 执行时间，其中不包括查询计划的生成时间

```

参考文档\
https://www.postgresql.org/docs/10/using-explain.html

https://juejin.cn/post/6960674004969455623

#### 3、建库
```sql
CREATE DATABASE tong;
```

#### 4、查询事务隔离级别
```sql
SHOW transaction_isolation;
```

### 表操作

#### 1、创建表

```sql
CREATE TABLE "public"."user_info" (
  "id" int8 NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "sex" int2,
  "create_time" timestamp(6),
  "update_time" timestamp(6),
  "is_deleted" int2 DEFAULT 0,
  CONSTRAINT "user_pkey" PRIMARY KEY ("id")
)
;

ALTER TABLE "public"."user_info" 
  OWNER TO "postgres";

COMMENT ON COLUMN "public"."user_info"."id" IS '主键';

COMMENT ON COLUMN "public"."user_info"."name" IS '姓名';

COMMENT ON COLUMN "public"."user_info"."sex" IS '性别 0女 1男';

COMMENT ON COLUMN "public"."user_info"."create_time" IS '创建时间';

COMMENT ON COLUMN "public"."user_info"."update_time" IS '修改时间';

COMMENT ON COLUMN "public"."user_info"."is_deleted" IS '是否删除 0 否 1 是';
 
```

#### 2、添加索引
##### ① 唯一索引
```sql
CREATE UNIQUE INDEX idx_unique_name ON public.user_info (name);
```

##### ② 单列索引
```sql
CREATE INDEX idx_sex ON public.user_info (sex);
```

##### ③ 多列索引
```sql
CREATE INDEX idx_name_sex ON public.user_info (name, sex);
```

##### ④ 函数索引
##### ⑤ 部分索引
##### ⑥ 覆盖索引

#### 3、表修改名字
#### 4、表添加字段
```sql
ALTER TABLE user_info ADD COLUMN context varchar(255);
```

#### 5、表修改字段名字

#### 6、查询

#### 7、表联查


-- 问题 
-- 1. 自增问题

### 存储过程


## 事务
### 事务隔离级别
默认隔离级别 read committed

show default_transaction_isolation;


## 索引
默认索引类型B-tree

#### B-树索引
自平衡树

#### 哈希
用于等值查找

#### GiST
搜索树

#### SP-GiST
空间区分GiST

#### GIN
广义倒排索引

#### BRIN
区间索引

## 底层原理
PostgreSQL的存储引擎是数据库的心脏，负责数据的存储、检索和管理。它使用的核心技术是MVCC（多版本并发控制）模型。

参考文档\
https://mp.weixin.qq.com/s/k2nTYC_B-wnc3Np5HKA5JQ

https://zhuanlan.zhihu.com/p/457860359


```sql
查询数据蔟目录
SHOW DATA_DIRECTORY

查询表位置
SELECT pg_relation_filepath('sys_dict');
base/16388/16397
其中16388是数据库(tong)的Oid名；16397是sys_dict数据表名
```




## 性能优化





## 窗口函数
## 继承
## 故障恢复
## 日志
## 读写分离 分库分表
## 多版本控制 MVCC



https://cloud.tencent.com/developer/article/2406437



















