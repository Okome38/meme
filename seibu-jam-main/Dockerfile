# ビルド用ステージ
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# プロジェクトファイルをコピーしてパッケージ復元
COPY *.csproj ./
RUN dotnet restore

# 残りのアプリケーションファイルをコピー
COPY . .

# プロジェクトを公開
RUN dotnet publish -c Release -o /app/publish

# 実行用ステージ
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

COPY --from=build /app/publish .

# 環境変数
ENV FIREBASE_API_KEY=AIzaSyAQm6zlL2FQkYUKj_yjGKgytN4vQuLtNak
ENV FIREBASE_ADMIN_EMAIL=admin@seibu.local
ENV FIREBASE_ADMIN_PASSWORD=Oneshota@3150
ENV ASPNETCORE_URLS=http://+:8080
ENV ASPNETCORE_ENVIRONMENT=Production

EXPOSE 8080

ENTRYPOINT ["dotnet", "meme.dll"]
