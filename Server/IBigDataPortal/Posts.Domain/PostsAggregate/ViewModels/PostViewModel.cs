﻿namespace Posts.Domain.PostsAggregate.ViewModels;

public class PostViewModel
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string UserEmail { get; set; }
    public DateTimeOffset Posted { get; set; } 
}