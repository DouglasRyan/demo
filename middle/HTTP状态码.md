1. 1xx消息

&emsp;&emsp;这一类型的状态码，代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束。

2. 2xx成功

&emsp;&emsp;这一类型的状态码，代表请求已成功被服务器接收、理解、并接受。

- 200 OK

&emsp;&emsp;请求已成功，请求所希望的响应头或数据体将随此响应返回。实际的响应将取决于所使用的请求方法。在GET请求中，响应将包含与请求的资源相对应的实体。在POST请求中，响应将包含描述或操作结果的实体。

- 201 Created

&emsp;&emsp;请求已经被实现，而且有一个新的资源已经依据请求的需要而建立，且其URI已经随Location头信息返回。假如需要的资源无法及时创建的话，应当返回'202 Accepted'。

- 202 Accepted

&emsp;&emsp;服务器已接受请求，但尚未处理。最终该请求可能会也可能不会被执行，并且可能在处理发生时被禁止。

3. 3xx重定向

&emsp;&emsp;这类状态码代表需要客户端采取进一步的操作才能完成请求。通常，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的Location域中指明。<br>
&emsp;&emsp;当且仅当后续的请求所使用的方法是GET或者HEAD时，用户浏览器才可以在没有用户介入的情况下自动提交所需要的后续请求。

- 300 Multiple Choices

&emsp;&emsp;被请求的资源有一系列可供选择的回馈信息，每个都有自己特定的地址和浏览器驱动的商议信息。用户或浏览器能够自行选择一个首选的地址进行重定向。

- 301 Moved Permanently

&emsp;&emsp;被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个URI之一。

- 302 Found

&emsp;&emsp;要求客户端执行临时重定向（原始描述短语为“Moved Temporarily”）。

- 303 See Other

&emsp;&emsp;对应当前请求的响应可以在另一个URI上被找到，当响应于POST（或PUT / DELETE）接收到响应时，客户端应该假定服务器已经收到数据，并且应该使用单独的GET消息发出重定向。<br>
&emsp;&emsp;303响应禁止被缓存。

- 304 Not Modified

&emsp;&emsp;表示资源在由请求头中的If-Modified-Since或If-None-Match参数指定的这一版本之后，未曾被修改。在这种情况下，由于客户端仍然具有以前下载的副本，因此不需要重新传输资源

- 305 Use Proxy

&emsp;&emsp;被请求的资源必须通过指定的代理才能被访问。

4. 4xx客户端错误

&emsp;&emsp;这类的状态码代表了客户端看起来可能发生了错误，妨碍了服务器的处理。除非响应的是一个HEAD请求，否则服务器就应该返回一个解释当前错误状况的实体，以及这是临时的还是永久性的状况。这些状态码适用于任何请求方法。浏览器应当向用户显示任何包含在此类错误响应中的实体内容。

- 400 Bad Request

&emsp;&emsp;由于明显的客户端错误（例如，格式错误的请求语法，太大的大小，无效的请求消息或欺骗性路由请求），服务器不能或不会处理该请求。

- 401 Unauthorized

&emsp;&emsp;用户没有必要的凭据。该状态码表示当前请求需要用户验证。

- 403 Forbidden

&emsp;&emsp;服务器已经理解请求，但是拒绝执行它。没有权限访问此站，服务器收到请求但拒绝提供服务。


```
下列非标准代码由微软的互联网资讯服务所返回，这些代码不被IANA官方认可。
403.1 - 禁止执行访问。
403.2 - 禁止读取访问。
403.3 - 禁止写入访问。
403.4 - 需要SSL
403.5 - 需要128位SSL。
403.6 - IP地址被拒绝。
403.7 - 需要客户端证书。
403.8 - 拒绝站点访问。
403.9 - 用户数过多。
403.10 - 无效配置。
403.11 - 密码更改。
403.12 - 映射器拒绝访问。
403.13 - 客户端证书被撤销。
403.14 - 拒绝列出目录。
403.15 - 客户端访问授权过多。
403.16 - 客户端证书不被信任或无效。
403.17 - 客户端证书已过期或尚未有效。
403.18 - 无法执行来自此应用程序池的请求。
403.19 - 无法为客户端执行此应用程序池中的CGI。
403.20 - 认证登录失败。
403.21 - 拒绝源访问。
403.22 - 无限深度被拒绝。
403.502 - 来自客户端IP的请求过多；已达到动态IP限制。
```

- 404 Not Found

&emsp;&emsp;请求失败，请求所希望得到的资源未被在服务器上发现，但允许用户的后续请求。<br>
&emsp;&emsp;此消息代表客户端在浏览网页时，服务器无法正常提供消息，或是服务器无法回应且不知原因。通常是因为用户所访问的对应网页已被删除被移动或从未存在。404也是互联网上最常见的错误之一。<br>
&emsp;&emsp;可以自己定制404页面

- 405 Method Not Allowed

&emsp;&emsp;请求行中指定的请求方法不能被用于请求相应的资源。该响应必须返回一个Allow头信息用以表示出当前资源能够接受的请求方法的列表。

- 406 Not Acceptable

&emsp;&emsp;请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体，该请求不可接受。

- 408 Request Timeout

&emsp;&emsp;请求超时。根据HTTP规范，客户端没有在服务器预备等待的时间内完成一个请求的发送，客户端可以随时再次提交这一请求而无需进行任何更改。

5. 5xx服务器错误

&emsp;&emsp;表示服务器无法完成明显有效的请求。这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。

- 500 Internal Server Error

&emsp;&emsp;通用错误消息，服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。没有给出具体错误信息。

- 501 Not Implemented

&emsp;&emsp;服务器不支持当前请求所需要的某个功能。当服务器无法识别请求的方法，并且无法支持其对任何资源的请求。

- 502 Bad Gateway

&emsp;&emsp;作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。

- 503 Service Unavailable

&emsp;&emsp;由于临时的服务器维护或者过载，服务器当前无法处理请求。这个状况是暂时的，并且将在一段时间以后恢复。

- 505 HTTP Version Not Supported

&emsp;&emsp;服务器不支持，或者拒绝支持在请求中使用的HTTP版本。[63]这暗示着服务器不能或不愿使用与客户端相同的版本。

- 511 Network Authentication Required 

&emsp;&emsp;客户端需要进行身份验证才能获得网络访问权限，旨在限制用户群访问特定网络。