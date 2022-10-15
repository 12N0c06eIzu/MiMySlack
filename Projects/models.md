# データ構造

- Workspace
  - pk_wid(PK)
  - name(string)

<!-- npx sequelize model:generate --name Workspace --attributes pk_wid:integer,name:string -->

- User
  - pk_uid(PK)
  - pk_wid(FK)
  - name(string)
  - nickname(string)
  - password(string)
  - pk_iid(FK)

<!-- npx sequelize model:generate --name User --attributes pk_uid:integer,pk_wid:integer,name:string,nickname:string,password:string,pk_iid:integer -->

- Space
  - pk_sid(PK)
  - pk_wid(FK)
  - name(string)
  - dc_flag(boolean)

<!-- npx sequelize model:generate --name Space --attributes pk_sid:integer,pk_wid:integer,name:string,dc_flag:boolean -->

- Thread
  - pk_tid(PK)
  - pk_sid(FK)
  - pk_uid(FK)
  - content(string)
  - send_dt

<!-- npx sequelize model:generate --name Thread --attributes pk_tid:integer,pk_sid:integer,pk_uid:integer,content:string,send_dt:date -->

- Comment
  - pk_cid(PK)
  - pk_tid(FK)
  - pk_uid(FK)
  - content
  - send_dt

<!-- npx sequelize model:generate --name Comment --attributes pk_cid:integer,pk_tid:integer,pk_uid:integer,content:string,send_dt:date -->

- Images
  - pk_iid(PK)
  - pk_uid(FK)
  - path

<!-- npx sequelize model:generate --name Images --attributes pk_iid:integer,pk_uid:integer,path:string -->


<!-- 作成したマイグレーションファイルを実行する。 -->

npx sequelize-cli db:migrate --env development

<!-- seed:generate box -->

npx sequelize-cli seed:generate --name workspaces
npx sequelize-cli seed:generate --name spaces
npx sequelize-cli seed:generate --name thread
npx sequelize-cli seed:generate --name comment
npx sequelize-cli seed:generate --name user
npx sequelize-cli seed:generate --name image

<!-- Seedの内容を反映 -->

npx sequelize-cli db:seed:all