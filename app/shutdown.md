---
layout: "blog"
title: "시스템 예약종료 프로그램(Windows)"
category: "Application"
date: "2017.09.01 00:00"
comments: true
ads: true
---

<p class="image center"><img alt="실행직후" src="/assets/app/shutdown-1.png"/><img alt="작동중" src="/assets/app/shutdown-1.png"/></p>
- OS : Windows

<br>

윈도우 프로그래밍 연습용으로 만들어본 컴퓨터 예약종료 프로그램입니다.
시, 분, 초 단위로 예약할 수 있으며, 종료, 다시시작을 선택하여 예약할 수 있습니다.

### 다운로드
※ 소스코드는 압축파일이며, 실행파일은 압축없이 exe파일입니다.

<br>

<a class="file" href="http://opnay.tistory.com/attachment/cfile21.uf@9947D63359A82F9914EC49.zip">소스코드</a>
<a class="file run" href="http://opnay.tistory.com/attachment/cfile26.uf@99421F3359A82F932A3539.exe">실행파일</a>

<style>
.article .file {
    background:#03A9F4; position:relative;
    display:inline-block; margin:8px 0; padding:0 16px 0 64px;
    border-radius:2px; height:48px; line-height:48px;
    overflow:hidden; font-size:0.8rem; color:white;
    box-shadow:0 0 4px rgba(0,0,0,0.3); transition:box-shadow 200ms;
}
.article .file:hover {text-decoration:none; box-shadow:0 0 8px rgba(0,0,0,0.6);}
.article .file:before {
    content:'';
    background:rgba(0,0,0,0.2) url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01LDIwSDE5VjE4SDVNMTksOUgxNVYzSDlWOUg1TDEyLDE2TDE5LDlaIiAvPg0KPC9zdmc+") no-repeat center;
    position:absolute; top:0; left:0;
    display:block; margin-right:8px; width:48px; height:48px;
}
.article .run:before {
    background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiICB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEwLDE2LjVMMTYsMTJMMTAsNy41VjE2LjVaIiAvPgo8L3N2Zz4=")
}
</style>