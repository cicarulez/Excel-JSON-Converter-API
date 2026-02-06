# MCP Build Verification Flow

Run this verification flow only after tasks that change files in this project.
Do not run it for Q&A or other non-editing tasks.

1. Call the `run_build` tool with:
   - `command`: the build/test command (e.g., `build`)
   - `cwd`: `/home/davidecappa/projects/Excel-JSON-Converter-API`
2. Read `stdout` and `stderr` from the response.
3. Call `analyze_logs` passing `stdout` and `stderr`.
4. Use ONLY the first error returned by `analyze_logs` to decide next steps.

Notes:
- Do not suggest fixes unless explicitly asked.
- Do not modify files during the verification phase.
