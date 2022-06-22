package pages;

import com.gargoylesoftware.htmlunit.Page;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import steps.HeroAppSteps;
import utils.Driver;

import java.util.List;

public class HeroAppPage {
    public HeroAppPage(){
        PageFactory.initElements(Driver.getDriver(),this);

    }
 @FindBy(css = "li>a")
    public List<WebElement> categoryLinks;
    public void clickOnCategoryLink(String linkText){
        for(WebElement link : categoryLinks){
            if(link.getText().equals(linkText)){
                link.click();
                break;
            }
        }
    }
@FindBy(css = "h3") //#content>h3
    public WebElement addRemoveHeading3;

    @FindBy(css = "button[onclick='addElement()']")
    public WebElement addElementButton;

    @FindBy(css = "#elements>button")
    public WebElement deleteElementButton;

    @FindBy(css = ".example>h3")
    public WebElement contextMenuHeading3;

    @FindBy(css = ".example>p:nth-child(2)")
    public WebElement contextMenuParagraph1;

    @FindBy(css = ".example>p:nth-child(3)")
    public WebElement contextMenuParagraph2;

    @FindBy(id = "hot-spot")
    public WebElement rectangleBox;


    @FindBy(id = "username")
    public WebElement usernameInputBox;

    @FindBy(id = "password")
    public WebElement passwordInputBox;

    @FindBy(css = "button[class='radius']")
    public WebElement loginButton;

    @FindBy(id = "flash")
    public WebElement invalidMessage;


}
