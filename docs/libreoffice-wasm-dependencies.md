# LibreOffice WASM 依赖分析报告

## 概述

本文档分析了 pdfcraft 项目中哪些功能依赖于 `soffice.wasm.gz` 和 `soffice.data.gz` 文件。

## 依赖文件说明

| 文件 | 大小 | 说明 |
|------|------|------|
| `soffice.wasm.gz` | ~47MB | gzip 压缩的 WASM 二进制文件 |
| `soffice.data.gz` | ~29MB | gzip 压缩的数据文件 |

这些文件是 LibreOffice WASM (LibreOffice 在浏览器中运行) 的核心组件，由 [@matbee/libreoffice-converter](https://www.npmjs.com/package/@matbee/libreoffice-converter) 库使用。

## 依赖的功能

以下 4 个文档转换功能依赖于 LibreOffice WASM：

### 1. Word 转 PDF

- **文件**: `src/lib/pdf/processors/word-to-pdf.ts`
- **支持格式**: `.docx`, `.doc`, `.odt`, `.rtf`
- **API**: `getLibreOfficeConverter().convertToPdf(file)`
- **Worker**: `public/workers/word-to-pdf.worker.js`

### 2. Excel 转 PDF

- **文件**: `src/lib/pdf/processors/excel-to-pdf.ts`
- **支持格式**: `.xlsx`, `.xls`, `.ods`, `.csv`
- **API**: `getLibreOfficeConverter().convertToPdf(file)`
- **Worker**: `public/workers/excel-to-pdf.worker.js`

### 3. PowerPoint 转 PDF

- **文件**: `src/lib/pdf/processors/pptx-to-pdf.ts`
- **支持格式**: `.pptx`, `.ppt`, `.odp`
- **API**: `getLibreOfficeConverter().convertToPdf(file)`
- **Worker**: `public/workers/pptx-to-pdf.worker.js`

### 4. RTF 转 PDF

- **文件**: `src/lib/pdf/processors/rtf-to-pdf.ts`
- **支持格式**: `.rtf`
- **API**: `getLibreOfficeConverter().convertToPdf(file)`
- **Worker**: `public/workers/rtf-to-pdf.worker.js`

## 核心实现

所有上述功能都共享同一个 `LibreOfficeConverter` 单例：

- **核心类**: `src/lib/libreoffice/converter.ts`
- **导出**: `getLibreOfficeConverter(basePath?: string): LibreOfficeConverter`

关键代码路径：

```typescript
import { getLibreOfficeConverter } from '@/lib/libreoffice';

// 获取转换器实例
const converter = getLibreOfficeConverter();

// 初始化（首次加载需要下载 WASM 资源，约 76MB）
await converter.initialize(onProgress);

// 执行转换
const pdfBlob = await converter.convertToPdf(file);
```

## 环境要求

LibreOffice WASM 依赖浏览器提供的 **SharedArrayBuffer**，需要以下 HTTP 响应头：

- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Embedder-Policy: require-corp`
- `Cross-Origin-Resource-Policy: cross-origin`

这些头在 `middleware.ts` 中为所有响应自动设置。

## 技术细节

### 资源路径

- WASM 文件从远程 URL 加载：`https://github.com/misswebx/pdf-web/releases/download/v1.0.1/soffice.wasm.gz`
- 本地辅助文件通过 `/libreoffice-wasm/` 路径提供：
  - `soffice.js`
  - `soffice.worker.js`
  - `browser.worker.global.js`

### 性能特点

- 首次初始化需要下载约 76MB 的 WASM 资源
- 转换超时时间：5 分钟
- 最大文件大小：50MB
- 使用 Web Worker 在后台线程执行，避免阻塞主线程

## 不依赖的功能

以下功能**不**依赖 LibreOffice WASM：

| 功能 | 使用的技术 |
|------|------------|
| PDF 压缩/优化 | pdf-lib / pdf.js |
| PDF 合并/拆分 | pdf-lib |
| PDF 编辑 | pdf-lib |
| PDF 附件管理 | pdf-lib |
| 图片转 PDF | 原生 Canvas API |
| OCR 识别 | Tesseract.js |

---
*生成时间: 2026-03-31*