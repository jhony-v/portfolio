import pug from "pug"
import { EmailProps } from "../adapters/SendEmailAdapter"

export default class RenderTemplateEmailService {
  private template!: string

  render(filename: string): RenderTemplateEmailService {
    this.template = pug.renderFile(filename, {
      pretty: true,
      debug: false,
    })

    return this
  }

  replace({ message, subject, name, from }: EmailProps) {
    return this.template
      .replace("{{subject}}", subject)
      .replace("{{message}}", message)
      .replace("{{name}}", name || "")
      .replace("{{from}}", from || "")
  }
}
