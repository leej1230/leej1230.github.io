@echo off
if "%~1"=="" (
    echo エラー: 記事名を指定してください。
    echo 使い方: newpost.bat [記事名]
    exit /b 1
)

echo 記事を作成しています: %~1
hugo new post/%~1/index.ja.md
hugo new post/%~1/index.en.md

echo 完了しました。