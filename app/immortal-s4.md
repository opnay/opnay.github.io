---
layout: "blog"
title: "[Galaxy S4] Immortal Kernel v1.14"
category: "Application"
date: "2017.09.12 21:23"
comments: true
ads: true
---
<p style="color:#f44336;">※ 현재 이 커널은 지원이 종료되었으며, 개발자인 제가 현재 기기가 없어 더이상 진행이 불가능합니다.<br>
※ 이 커널을 적용함으로 생기는 모든 불이익은 본인이 책임지게됩니다.</p>

갤럭시 S4 커스텀 커널이며, 기존의 갤럭시 S4 펌웨어에 들어가던 커널에서 각종 트윅과 성능 추가로 최적화 작업을해 좀더 제대로된 성능을 낼수 있도록 수정한 커널입니다.

## 기능
- 안드로이드 Lollipop 펌웨어
- 툴체인 GCC 5.4.1 사용
- Linux 3.4.113
- 스케줄러 CFQ(기본값)
- 가버너 Ondemand-sec(기본값)
- CPU 클럭 테이블 확장
- GPU 클럭 테이블 확장
- 압축방식 변경
- KSM 최적화
- TCP 혼잡제어 Westwood(기본값)
- ARM NEON 최적화

## 변경사항
### v1.14
- UPDATE: PI1 펌웨어 기반
- UPDATE: Linaro 툴체인 5.4.1
- UPDATE: Linux 3.4.113 업스트림
- UPDATE: F2FS (jaegeuk님의 f2fs-stable/linux-3.4.y 브랜치로 패치)
- UPDATE: GPU 640Mhz 오버클럭
- UPDATE: GPU dvfs 알고리즘 수정
- UPDATE: 드라이버 업스트림
- ADD: 메인 Linux커널의 Ondemand 스케줄러
- UPDATE: 기존 삼성의 ondemand 스케줄러는 ondemand-sec로 변경
- FIX: LowmemoryKiller 관련 롤백 복원

## 권장 커널 앱
공식 앱은 없으며, 아래의 앱은 권장입니다.
- [Kenrel Adiutor](https://play.google.com/store/apps/details?id=com.grarak.kerneladiutor)
- [Trickster MOD](https://play.google.com/store/apps/details?id=com.bigeyes0x0.trickstermod)

## 다운로드
[Github에서 다운로드](https://github.com/OPNay/android_kernel_samsung_jalte/releases/tag/v1.14)

## 소스코드
- [Github](https://github.com/OPNay/android_kernel_samsung_jalte/)
- [Github 현재 버전 태그](https://github.com/OPNay/android_kernel_samsung_jalte/tree/v1.14)
