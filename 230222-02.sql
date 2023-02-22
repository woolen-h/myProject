drop table sungjuk;

create table sungjuk (
 uname VARCHAR(50)  not null    -- �� ���� ������� ����
                                           -- ������ 50���� �̳����� �Է�
                                           -- 2����Ʈ 3����Ʈ
                                           -- �ѱ� 16���� �̳� �Է�
 ,kor       int              not null    -- ������
 ,eng       int              not null    
 ,mat        int              not null    
 ,tot       int              null           -- �� �� ���
 ,aver        int                           -- null ���� ����
);

/////////////////////////////////////////////////////////////////////////////

[���� ������ �� �߰�]
insert into sungjuk(uname,kor,eng,mat) values ('ȫ�浿', 70, 85, 100);
insert into sungjuk(uname,kor,eng,mat) values ('����ȭ',30,30,40);
insert into sungjuk(uname,kor,eng,mat) values ('���޷�',90,90,20);
insert into sungjuk(uname,kor,eng,mat) values ('������',100,60,30);
insert into sungjuk(uname,kor,eng,mat) values ('���϶�',30,80,40);
insert into sungjuk(uname,kor,eng,mat) values ('����ȭ',80,80,20);
insert into sungjuk(uname,kor,eng,mat) values ('���ѹα�',10,65,35);
insert into sungjuk(uname,kor,eng,mat) values ('�عٶ��',30,80,40);
insert into sungjuk(uname,kor,eng,mat) values ('���Ȳ�',30,80,20);
insert into sungjuk(uname,kor,eng,mat) values ('���ѹα�',100,100,100);

[��ü ���ڵ� ��ȸ]

select uname, kor, eng, mat, tot, aver
from sungjuk;

[��ü �� ���� ��ȸ]

select count(*) from sungjuk;

[select ��ȸ �� �˻�]

select kor, eng, mat from sungjuk;
select tot, aver from sungjuk;
select * from sungjuk;

[as] --Į������ �ӽ� ����

select kor as korea, eng as english, mat as math
from sungjuk;

-- as ���� ����

select kor korea, eng english, mat mate
from sungjuk;

--�ӽ� �ѱ� Į������ �Ͻ������� �м��ؾ� �ϴ� ��쿡�� ��õ
select uname �̸�, kor ����, eng ����, mat ����, tot ����, aver ���
from sungjuk;

--Į���� ������ �ǹ̰� ����
select uname, kor, eng, mat from sungjuk;
select kor, eng, mat from sungjuk;

[count �Լ�] - �� ���� ��ȸ

select count(uname) from sungjuk;
select count(kor) from sungjuk;
select count(eng) from sungjuk;
select count(mat) from sungjuk;

select count(tot) from sungjuk;
select count(aver) from sungjuk;

select count(eng) as cnt_eng from sungjuk;
select count(mat) as ���а��� from sungjuk;


-- sungjuk ���̺��� ��ü ���� ����
select count(*) from sungjuk;
select count(*) as ��ü�హ�� from sungjuk;
select count(*) ��ü �� ���� from sungjuk;